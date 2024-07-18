export default function ColorBoxLayout({ children, left, right }) {
  const isSidebar = true;
  return (
    <section>
      {children}
      {isSidebar ? left : right}
    </section>
  );
}
