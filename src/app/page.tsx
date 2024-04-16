import NextImage from "next/image"
import {Image} from "@mantine/core"
import banner from "@/images/banner.jpg"
import style from "./home.module.css"
import AllBooks from "@/component/AllBooks/allBooks";

import {IBook} from "@/consts/interface/IBook";

export default function Home() {

  return (
    <main>
        <div className={style.banner}>
            <Image className={style.image} fit={"cover"} component={NextImage} src={banner} alt="Banner"/>
        </div>
        <AllBooks/>

    </main>
  );
}
