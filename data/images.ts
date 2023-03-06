export interface ImageData {
  src: string;
  width: number;
  height: number;
  author: string;
  title: string;
  tags: string[];
}

const images: ImageData[] = [
  {
    src: "images/a_picture_of_a_wide_and_beautiful_world_234fbf61-38f5-46c7-9cb4-d48c4fd7e954.png",
    width: 1024,
    height: 1024,
    author: "John Doe",
    title: "Wide and Beautiful World",
    tags: ["midjourney", "landscape", "fantasy"],
  },
  {
    src: "images/Alesis5_Young_and_skinny_woman_full_face_bob_haircut__hair_part_6a9f5b52-129f-478b-97d6-76117636d862.png",
    width: 1536,
    height: 1024,
    author: "Alesis5",
    title: "Young and skinny woman",
    tags: ["midjourney", "portrait"],
  },
  {
    src: "images/filaf_logo_T_grapefruit_splash_white_background_961ae044-b843-4510-b086-e1841047fa4a.png",
    width: 1024,
    height: 1024,
    author: "filaf",
    title: "Grapefruit Spalsh Logo",
    tags: ["midjourney", "logo", "3D"],
  },
  {
    src: "images/jessedufresne_Create_a_highly-detailed_and_realistic_artwork_of_32a4280f-28db-4dc6-8b75-04e6da5400ea.png",
    width: 1024,
    height: 1024,
    author: "jessedufresne",
    title: "Untitled",
    tags: ["midjourney", "fantasy"],
  },
  {
    src: "images/Kairo_beautiful_mixed-race_Asian_and_latina_woman_with_long_flo_5306c22e-67cf-4dfe-86bc-8466cf218470.png",
    width: 1024,
    height: 1024,
    author: "Kairo",
    title: "Mixed race Asian and Latina woman",
    tags: ["midjourney", "portrait"],
  },
  {
    src: "images/menglew12_realistic_lion_head_on_a_man_body_wearing_a_suit_shak_cd269b0d-6ffb-4865-9be7-1742e7c0fa08.png",
    width: 1024,
    height: 1024,
    author: "menglew12",
    title: "Realistic lion head on a man wearing a suit",
    tags: ["midjourney", "fantasy"],
  },
  {
    src: "images/skilldiesel786_flat_pattern_Christmas_design_simple_design_vect_263c8e17-971a-49f2-9e80-fccd245b89c6.png",
    width: 1024,
    height: 1024,
    author: "skilldiesel786",
    title: "Realistic lion head on a man wearing a suit",
    tags: ["midjourney", "fantasy"],
  },
  {
    src: "images/watamasa__46369757-474d-4b8c-90a9-eb3477459b58.png",
    width: 1024,
    height: 1024,
    author: "watamasa",
    title: "Untitled",
    tags: ["midjourney", "landscape"],
  },
];

export default images;
