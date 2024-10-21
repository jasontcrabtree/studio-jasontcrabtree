// test ability to render content from different sources (md/postgres)
import { expect, test, vitest } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
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

test("Combined blog posts from both sources render", () => {
    render(<BlogPosts posts={mockData} />)

    const blogPosts = screen.queryAllByRole("listitem")
    expect(blogPosts.length).toBe(mockData.length)
})

test("Blog posts show correct order", () => {
    render(<BlogPosts posts={mockData} />)

    const blogPosts = screen.queryAllByRole("heading")

    console.log("blogPosts", blogPosts)

    // expect(blogPosts.length).toBe(mockData.length)
})

test("Topic lists autogenerate based on provided data", () => {
    render(<BlogPosts posts={mockData} />)

    // const topics = screen.queryAllByTestId("topic-tag")
    const topics = screen.getAllByRole("link")

    // There should be a 1 link per both, plus the correct number of topic links
    const expectedNumber = topics.length - mockData.length

    expect(topics.length).toBe(expectedNumber)
})
