'use client'

import {Menu, Title} from "@mantine/core";
import style from "./header.module.css"
import {IconUserCircle, IconBooks} from "@tabler/icons-react";

const Header = () => {


    return (
        <header className={style.box}>
            <Title className={style.h1} order={3}>FreeBook</Title>
            <Menu width={200} shadow={"md"}>
                <Menu.Target>
                    <IconUserCircle color={"white"} size={"1.7rem"}/>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item leftSection={<IconBooks/>}>
                        My Books
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>

        </header>
    )

}

export default Header