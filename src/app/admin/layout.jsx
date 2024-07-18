import AdminHeader from "@/components/AdminHeader";

export default function AdminLayout({ children, dashboard, profile }) {
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
}
