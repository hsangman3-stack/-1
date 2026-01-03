
import React from 'react';
import { INITIAL_TREATMENTS } from '../constants';
import { TreatmentItem } from '../types';

const Admin: React.FC = () => {
  const [password, setPassword] = React.useState('');
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const [treatments, setTreatments] = React.useState<TreatmentItem[]>([]);
  const [editingItem, setEditingItem] = React.useState<TreatmentItem | null>(null);

  React.useEffect(() => {
    const saved = localStorage.getItem('clinic_treatments');
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
    localStorage.setItem('clinic_treatments', JSON.stringify(items));
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
    if (treatments.find(t => t.id === editingItem.id)) {
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
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-emerald-900">관리자 로그인</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-stone-700 mb-2">비밀번호</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded focus:ring-2 focus:ring-emerald-500 outline-none" 
              placeholder="1111"
            />
          </div>
          <button type="submit" className="w-full bg-emerald-800 text-white py-3 rounded font-bold hover:bg-emerald-900 transition-colors">
            로그인
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-emerald-900">포트폴리오(진료 항목) 관리</h1>
          <button 
            onClick={() => setEditingItem({ id: '', title: '', description: '', imageUrl: '' })}
            className="bg-emerald-800 text-white px-6 py-2 rounded hover:bg-emerald-900"
          >
            항목 추가
          </button>
        </div>

        {editingItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <form onSubmit={handleSaveEdit} className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
              <h3 className="text-xl font-bold mb-6">진료 항목 편집</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">진료 명칭</label>
                  <input 
                    type="text" 
                    value={editingItem.title}
                    onChange={e => setEditingItem({...editingItem, title: e.target.value})}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">설명</label>
                  <textarea 
                    value={editingItem.description}
                    onChange={e => setEditingItem({...editingItem, description: e.target.value})}
                    className="w-full border p-2 rounded h-24"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">이미지 URL</label>
                  <input 
                    type="text" 
                    value={editingItem.imageUrl}
                    onChange={e => setEditingItem({...editingItem, imageUrl: e.target.value})}
                    className="w-full border p-2 rounded"
                    placeholder="https://..."
                    required
                  />
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <button type="button" onClick={() => setEditingItem(null)} className="flex-1 border py-2 rounded hover:bg-stone-50">취소</button>
                <button type="submit" className="flex-1 bg-emerald-800 text-white py-2 rounded hover:bg-emerald-900 font-bold">저장</button>
              </div>
            </form>
          </div>
        )}

        <div className="grid gap-6">
          {treatments.map(item => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 flex flex-col md:flex-row gap-6 items-center">
              <img src={item.imageUrl} alt={item.title} className="w-32 h-24 object-cover rounded shadow" />
              <div className="flex-1">
                <h4 className="text-xl font-bold text-emerald-900">{item.title}</h4>
                <p className="text-stone-500 mt-1">{item.description}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(item)} className="px-4 py-2 border border-emerald-800 text-emerald-800 rounded hover:bg-emerald-50 transition-colors">편집</button>
                <button onClick={() => handleDelete(item.id)} className="px-4 py-2 bg-rose-50 text-rose-600 rounded hover:bg-rose-100 transition-colors">삭제</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
