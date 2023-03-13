/**
 * Project: damirifa
 * File: featured
 * Created by Pennycodes on 5/27/2022.
 * Copyright damirifa
 */
import {Image} from "@lib/interface/homepage/banner";

// limit is three

export interface FeaturedAnnouncements {
    id: string
    image: Image
    name: string
    date_of_birth: string
    date_of_death: string
    funeral_date: string
    link: string
    location: string
    age: number | string
}

