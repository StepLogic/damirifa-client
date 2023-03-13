/**
 * Project: damirifa
 * File: notices
 * Created by Pennycodes on 5/27/2022.
 * Copyright damirifa
 */

// export interface Notices {
// data: Array<NoticeItem>
// }

export interface Notices {
   firstname: string
    lastname: string
    photo: string
    slug: string
    funeral_date_from: string
    age: string | number
    funeral_date_to: string
    date_of_death: string
    link: string
    announcement_text: string
    type: string
    name: string
    year_birth: string
    year_death: string
}

interface NoticeItem {
    id: string | number
    name: string
    image: string
    year: string
    slug: string
    type: 'death-notice' | 'one-week'
    date: string
}
