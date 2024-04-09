import {Card, CardSection, Container, Image, SimpleGrid, Text, Title} from "@mantine/core";
import {IBook} from "@/consts/interface/IBook";
import style from "./allbooks.module.css"


async function AllBooks(){
    const res = await fetch('https://6614f7e62fc47b4cf27d9b07.mockapi.io/api/libray/books', {
        next: {revalidate: 60},
    })

    const books: IBook[] = (await res.json()) as IBook[];

    return(


        <Container className={style.container} size={"xl"}>
            <Title order={1}>All Books</Title>
            <SimpleGrid verticalSpacing={"xl"} spacing={"xl"} cols={3}>
                {books.map(elem =>
                        <Card className={style.card} key={elem.id} shadow={"xl"} padding={"xl"} radius={"xl"} withBorder>
                            <CardSection>
                                <Image
                                    src={elem.image}
                                    height={400}
                                    alt=""
                                />
                            </CardSection>

                            <Title className={style.title} order={3}>{elem.title}</Title>

                            <Text lineClamp={4} size={"md"} fw={300}>{elem.desc}</Text>
                        </Card>
                    )}

            </SimpleGrid>
        </Container>

    )
}

export default AllBooks