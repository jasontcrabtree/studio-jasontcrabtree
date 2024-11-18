import "@/ui/blog.css"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className="max-w-[48ch] p-4">{children}</section>
}
