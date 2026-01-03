
import React from 'react';
import { INITIAL_TREATMENTS } from '../constants';
import { TreatmentItem } from '../types';

const Admin: React.FC = () => {
  const [password, setPassword] = React.useState('');
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const [treatments, setTreatments] = React.useState<TreatmentItem[]>([]);
  const [editingItem, setEditingItem] = React.useState<TreatmentItem | null>(null);

  React.useEffect(() => {
    const saved = localStorage.getItem('pet_center_services');
    if (saved) {
      setTreatments(JSON.parse(saved));
    } else {
      setTreatments(INITIAL_TREATMENTS);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1111') {
      setIsAuthorized(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const saveToLocal = (items: TreatmentItem[]) => {
    localStorage.setItem('pet_center_services', JSON.stringify(items));
    setTreatments(items);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('삭제하시겠습니까?')) {
      const filtered = treatments.filter(t => t.id !== id);
      saveToLocal(filtered);
    }
  };

  const handleEdit = (item: TreatmentItem) => {
    setEditingItem(item);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    let updated;
    if (editingItem.id && treatments.find(t => t.id === editingItem.id)) {
      updated = treatments.map(t => t.id === editingItem.id ? editingItem : t);
    } else {
      updated = [...treatments, { ...editingItem, id: Date.now().toString() }];
    }

    saveToLocal(updated);
    setEditingItem(null);
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 px-4">
        <form onSubmit={handleLogin} className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-900">Admin Login</h2>
          <div className="mb-6">
            <label className="block text-sm font-medium text-stone-500 mb-2 ml-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-stone-100 p-4 rounded-2xl focus:border-emerald-500 outline-none transition-all" 
              placeholder="1111"
            />
          </div>
          <button type="submit" className="w-full bg-emerald-800 text-white py-4 rounded-2xl font-bold hover:bg-emerald-900 transition-colors shadow-lg">
            접속하기
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-stone-800 mb-2">서비스 관리자</h1>
            <p className="text-stone-500">메인 화면에 표시될 케어 서비스 항목을 관리합니다.</p>
          </div>
          <button 
            onClick={() => setEditingItem({ id: '', title: '', description: '', imageUrl: '' })}
            className="bg-emerald-800 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-900 shadow-md transition-all"
          >
            서비스 추가
          </button>
        </div>

        {editingItem && (
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <form onSubmit={handleSaveEdit} className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg">
              <h3 className="text-2xl font-bold mb-8 text-stone-800">서비스 편집</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-stone-500 mb-2">서비스 명칭</label>
                  <input 
                    type="text" 
                    value={editingItem.title}
                    onChange={e => setEditingItem({...editingItem, title: e.target.value})}
                    className="w-full border-2 border-stone-100 p-3 rounded-xl outline-none focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-500 mb-2">상세 설명</label>
                  <textarea 
                    value={editingItem.description}
                    onChange={e => setEditingItem({...editingItem, description: e.target.value})}
                    className="w-full border-2 border-stone-100 p-3 rounded-xl h-32 outline-none focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-500 mb-2">이미지 URL (Unsplash 등)</label>
                  <input 
                    type="text" 
                    value={editingItem.imageUrl}
                    onChange={e => setEditingItem({...editingItem, imageUrl: e.target.value})}
                    className="w-full border-2 border-stone-100 p-3 rounded-xl outline-none focus:border-emerald-500"
                    placeholder="https://images.unsplash.com/..."
                    required
                  />
                </div>
              </div>
              <div className="mt-10 flex gap-4">
                <button type="button" onClick={() => setEditingItem(null)} className="flex-1 bg-stone-100 text-stone-500 py-3 rounded-xl hover:bg-stone-200 transition-colors">취소</button>
                <button type="submit" className="flex-1 bg-emerald-800 text-white py-3 rounded-xl hover:bg-emerald-900 font-bold transition-colors">저장 완료</button>
              </div>
            </form>
          </div>
        )}

        <div className="grid gap-6">
          {treatments.map(item => (
            <div key={item.id} className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col md:flex-row gap-8 items-center">
              <img src={item.imageUrl} alt={item.title} className="w-40 h-32 object-cover rounded-2xl shadow" />
              <div className="flex-1">
                <h4 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h4>
                <p className="text-stone-500 leading-relaxed line-clamp-2">{item.description}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleEdit(item)} className="px-6 py-2 border-2 border-emerald-800 text-emerald-800 font-bold rounded-full hover:bg-emerald-50 transition-colors">편집</button>
                <button onClick={() => handleDelete(item.id)} className="px-6 py-2 bg-rose-50 text-rose-600 font-bold rounded-full hover:bg-rose-100 transition-colors">삭제</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
