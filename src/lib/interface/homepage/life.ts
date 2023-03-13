/**
 * Project: damirifa
 * File: life
 * Created by Pennycodes on 5/27/2022.
 * Copyright damirifa
 */

//limit 3
export interface Life {
    data: Array<LifeItem>
}

interface LifeItem {
    id: string | number
    image: string
    title: string
    excerpt: string
    slug: string
}
