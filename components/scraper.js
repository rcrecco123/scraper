import React from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import Axios from "axios";
const cheerio = require('react-native-cheerio');
var HTMLParser = require('fast-html-parser');

export default class Scraper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
        this.scrape = this.scrape.bind(this);
    }

    scrape() {
        return Axios.get("https://www.metacritic.com/feature/major-upcoming-video-game-release-dates-xbox-ps4-pc-switch")
            .then(response => {



                var root = HTMLParser.parse(response.data);

                let linetable = root.querySelectorAll('caption');

                let games = [];

                console.log(root);
                console.log(root.querySelectorAll('caption'));

                // linetable[0].text

                linetable.forEach((table) => {
                    console.log(table.text)

                    games.push(table.text);

                })

                return games;


                ;




                // let $ = cheerio.load(response.data);

                // let games = [];

                // $('.linedtable').each(() => {


                //     let title = $(this).find('caption').text();

                //     console.log(title)

                //     games.push(title);

            })
            // return response.data
            // return games;
            .then(response => {
                this.setState({
                    data: response
                })
            })

        // .catch(function (err) {
        //     return err;
        // });

    }
    componentDidMount() {
        this.scrape()
    }

    render() {

        list = <FlatList>



        </FlatList>


        return (
            <View>
                <ScrollView>
                    <Text>{this.state.data}</Text>
                </ScrollView>
            </View>
        )
    }



}