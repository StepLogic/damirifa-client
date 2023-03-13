/**
 * Project: damirifa
 * File: obituaries
 * Created by Pennycodes on 5/27/2022.
 * Copyright damirifa
 */

// export interface RecentObituaries {
//     data: {
//         standard: Array<ObituaryItem>
//         premium: Array<ObituaryItem>
//         royal: Array<ObituaryItem>
//     }
// }

export interface RecentObituaries {
   first_name: string
    last_name: string
    photo: string
    age: string | number
    slug: string
    funeral_date_from: string
    funeral_date_to: string
    date_of_death: string
    announcement_description: string
    funeral_date: string
    funeral_time: string
    location: string
    link_button_text: string
    link_button_url: string
    link_button_status: boolean
    name: string
    year_birth: string
    year_death: string
    type: string
}

interface ObituaryItem {
    id: string | number
    image: string
    name: string
    age: string
    date: string
    funeralDate: string
    location: string
    time: string
}
