
const tags = [
  "javascript",
  "react",
  "angular",
  "vue",
  "nodejs",
  "python",
  "django",
  "flask",
  "java",
  "springboot",
  "csharp",
  "dotnet",
  "ruby",
  "rails",
  "php",
  "laravel",
  "sql",
  "nosql",
  "machinelearning",
  "datascience",
];

const Tags = () => {
  return (
    <>
      <h2 className="py-2 text-xl text-text font-bold">Popular tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="bg-slate-200 rounded-full px-3 py-1 text-sm cursor-pointer text-dark transition hover:bg-primary hover:text-white dark:text-darkmode-light"
          >
            #{tag}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tags;
