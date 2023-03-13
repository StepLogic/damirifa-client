/**
 * Project: damirifa
 * File: special
 * Created by Pennycodes on 5/27/2022.
 * Copyright damirifa
 */
import {Image} from "@lib/interface/homepage/banner";

export interface SpecialAnnouncement {
   data: {
       id: string
       name: string
       image: Image
       description: string
       date_of_birth: string
       date_of_death: string
       age: string | number
       button_text: string
       button_link: string
   }
}


