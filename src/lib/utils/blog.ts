import { BlogMetaType, BlogPostType } from "@/ui/components/blog-posts"
import fs from "fs"
import path from "path"

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
    const match = frontmatterRegex.exec(fileContent)
    const frontMatterBlock = match![1]
    const body = fileContent.replace(frontmatterRegex, "").trim()
    const frontMatterLines = frontMatterBlock.trim().split("\n")
    const metadata: Partial<BlogMetaType> = {}

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(": ")
        let value = valueArr.join(": ").trim()
        value = value.replace(/^['"](.*)['"]$/, "$1") // Remove quotes
        metadata[key.trim() as keyof BlogMetaType] = value
    })

    return {
        metadata: metadata as BlogMetaType,
        body,
    }
}

function getMDXFiles(dir: fs.PathLike) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
    const rawContent = fs.readFileSync(filePath, "utf-8")
    return parseFrontmatter(rawContent)
}

function getMDXData(dir: string): BlogPostType[] {
    const mdxFiles = getMDXFiles(dir)

    const results = mdxFiles.map((file) => {
        const { metadata, body } = readMDXFile(path.join(dir, file))

        const slug = path.basename(file, path.extname(file))

        return {
            metadata,
            slug,
            body,
        }
    })

    return results.sort(
        (a, b) =>
            new Date(b.metadata.published).getTime() -
            new Date(a.metadata.published).getTime()
    )
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), "writing", "blog-posts"))
}

export function formatDate(date: string, includeRelative = false) {
    const currentDate = new Date()
    if (!date.includes("T")) {
        date = `${date}T00:00:00`
    }
    const targetDate = new Date(date)

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
    const daysAgo = currentDate.getDate() - targetDate.getDate()

    let formattedDate = ""

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`
    } else {
        formattedDate = "Today"
    }

    const fullDate = targetDate.toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })

    if (!includeRelative) {
        return fullDate
    }

    return `${fullDate} (${formattedDate})`
}
