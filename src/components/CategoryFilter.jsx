export default function CategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {categories.map((category) => {
        const active = activeCategory === category.id;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onChange(category.id)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active
                ? "border-accent bg-accent/15 text-accent"
                : "border-white/15 text-white/75 hover:border-white/35 hover:text-white"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
