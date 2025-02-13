export function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    return (
      <button 
        onClick={onClick} 
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
      >
        {children}
      </button>
    );
  }