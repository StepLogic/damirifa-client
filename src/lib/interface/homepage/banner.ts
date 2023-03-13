/**
 * Project: damirifa
 * File: banner
 * Created by Pennycodes on 5/27/2022.
 * Copyright damirifa
 */

export interface Banner {
    status: number
    message: string
    max: boolean
    data: BannerUser | {
        admin: BannerAdmin | []
        users: Array<BannerUser>
    }
}


export interface BannerAdmin {
    id: string | number
    title: string
    image: Image | 0
    description: string
    video_text: string
    video_link: string
    button_link: string
    button_text: string

}

export interface Image {
    id: number,
    name: string,
    type: string,
    size: string,
    size_raw: number,
    category: string,
    raw: string,
    path: string,
    status: 'active' | 'inactive',
    message: string,
    created: string,
    updated: string
}

export interface BannerUser {
    id: string | number
    title: string
    image: Image | 0
    description: string
    button_text: string
    button_link: string
    size: string | number
}

