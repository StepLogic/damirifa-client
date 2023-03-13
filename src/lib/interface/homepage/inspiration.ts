/**
 * Project: damirifa
 * File: inspiration
 * Created by Pennycodes on 5/27/2022.
 * Copyright damirifa
 */

export interface InspirationalLives {
    data: {
        text: string
        items: Array<InspirationItem>
    }
}

interface InspirationItem {
    id: string | number
    image: string
    name: string
    year: string
    date: string
    excerpt: string
    slug: string
}
