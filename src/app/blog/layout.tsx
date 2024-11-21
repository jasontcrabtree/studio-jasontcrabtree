import "@/ui/blog.css"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className="p-4">{children}</section>
}
