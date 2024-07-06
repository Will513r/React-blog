export function Header() {
  return (
    <header className="flex items-baseline gap-4 p-4">
      <h1 className="text-3xl font-semibold">React Blog</h1>
      <nav className="flex gap-2">
        <a href="#">Home</a>
        <a href="#">Posts</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}
