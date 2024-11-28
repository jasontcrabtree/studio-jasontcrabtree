"use server"

import { QueryResultRow, sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export interface LinkrollType {
    url: string
    description?: string
    isPublic: boolean
}

// export type LinkrollResult = (LinkrollType as QueryResultRow)| { message: string }

export type LinkrollResult = QueryResultRow[] | { message: string }

export const saveLinkroll = async ({
    url,
    description,
    isPublic = true,
}: LinkrollType) => {
    try {
        await sql`
        INSERT INTO "linkroll_entries_mk1" (url, description, public)
        VALUES (${url}, ${description}, ${isPublic})
        RETURNING *;`
    } catch (error) {
        return {
            message: `Error saving linkroll ${error}`,
        }
    }

    revalidatePath("/linkroll")
    redirect("/linkroll")
}

export const getPublicLinkrolls = async (): Promise<
    LinkrollType[] | { message: string }
> => {
    try {
        const res = await sql<LinkrollType>`
                SELECT url, description, public AS "isPublic"
                FROM linkroll_entries_mk1
                WHERE public = true;`
        return res.rows
    } catch (error) {
        return { message: `Error fetching all linkrolls: ${error}` }
    }
}

export const getAllLinkrolls = async (): Promise<
    LinkrollType[] | { message: string }
> => {
    try {
        const res =
            await sql<LinkrollType>`SELECT url, description, public AS "isPublic" FROM linkroll_entries_mk1;`
        return res.rows
    } catch (error) {
        return { message: `Error fetching all linkrolls: ${error}` }
    }
}
