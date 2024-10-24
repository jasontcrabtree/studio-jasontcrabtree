// test ability to render content from different sources (md/postgres)
import { afterEach, expect, test, vitest } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import BlogPosts from "../../src/ui/components/blog-posts"
import { BlogPostType } from "@/ui/components/blog-post"

const mockData: BlogPostType[] = [
    {
        title: "Demo Post One (should be second)",
        body: "## This is the first post \n",
        publishTimestamp: new Date(1729469485),
    },
    {
        title: "Demo Post Two (should be first)",
        body: "## This is the first post \n",
        publishTimestamp: new Date(1729769485),
    },
    {
        title: "Demo Post Three (should be third)",
        body: "## Second post\n",
        publishTimestamp: new Date(1729439485),
    },
]

afterEach(() => {
    cleanup()
})

test("Combined blog posts from both sources render", () => {
    render(<BlogPosts posts={mockData} />)

    const blogPosts = screen.queryAllByRole("listitem")
    expect(blogPosts.length).toBe(mockData.length)
})

test("Blog posts show in correct sequential order", () => {
    render(<BlogPosts posts={mockData} />)

    const blogPosts = screen.getAllByRole("heading")

    const actualOrder: (string | null)[] = []

    blogPosts.map((blogPost) => {
        actualOrder.push(blogPost.textContent)
    })

    const correctOrder = [
        "Demo Post Two (should be first)",
        "Demo Post One (should be second)",
        "Demo Post Three (should be third)",
    ]

    // correctOrder.map((_, i) => {
    //     expect(actualOrder[i]).toContain(correctOrder[i])
    // })

    expect(actualOrder).toEqual(correctOrder)
})

test("Correct number of topics is generated, with no duplicates", () => {
    render(<BlogPosts posts={mockData} />)

    // const topics = screen.queryAllByTestId("topic-tag")
    const topics = screen.queryAllByRole("link")

    // There should be a 1 link per both, plus the correct number of topic links
    const expectedNumber = topics.length - mockData.length

    expect(topics.length).toBe(expectedNumber)
})
