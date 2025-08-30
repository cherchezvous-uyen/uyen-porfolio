"use client";
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card"
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import HTMLIcon from "@/assets/icons/html5.svg"
import ReactIcon from "@/assets/icons/react.svg"
import JsIcon from "@/assets/icons/square-js.svg"
import GithubIcon from "@/assets/icons/github.svg"

import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png"
import memojiImage from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";

const toolboxItems = [
  { title: "HTML", iconType: HTMLIcon },
  { title: "JavaScript", iconType: JsIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Github", iconType: GithubIcon }
];

const hobbies = [
  { title: "Hiking", emoji: "🥾" },
  { title: "Sleeping", emoji:"🥾" },
  { title: "Realxing", emoji:"🥾"},
  { title: "Football", emoji:"🥾" }
];

export const AboutSection = () => {
  return( 
  <div className="pb-20">
      <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, What I do"/>
      <div className="mt-20">
        <Card className="h-[320px]">
          <CardHeader title='My Reads' description='Explore the books shaping my perspectives'/>
          <div className="mt-8 w-40 mx-auto">
            <Image src={bookImage} alt="Book cover" />
          </div>
        </Card>
        <Card>
         <CardHeader title='My Toolsbox' description='Explore the technologies and tools I use'/>
          <div>
              {toolboxItems.map((item)=>(
                <div key={item.title} className="inline-flex">
                  <TechIcon component={item.iconType}/>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
        </Card>
        <Card>
          <CardHeader title='Beyond the Code' description='Explore my interests and hobbies beyond the realm'/>
          <div>
              {hobbies.map((hobbies)=>(
                <div key={hobbies.title}>
                  <span>{hobbies.title}</span>
                  <span>{hobbies.emoji}</span>
                </div>
              ))}
            </div>
        </Card>
        
        <Card>
              <Image src={mapImage} alt="map"/>
              <Image src={memojiImage} alt="memoji"/>
        </Card>
      </div>
    </div>
  </div>
  );
};
