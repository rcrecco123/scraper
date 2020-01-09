import React from "react";
import { Text, View } from "react-native";
import Axios from "axios";
import cheerio from 'cheerio';


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

                let $ = cheerio.load(response.data);

                let articles = [];

                $('-pklmxa').each(() => {

                    let head = $(this)
                        .find('span')



                })


                debugger
                return response.data;
            }).then(response => {
                this.setState({
                    data: response
                })
            })
    }
    componentDidMount() {
        this.scrape()
    }

    render() {
        return (
            <View>
                <Text>{this.state.data.toString()}</Text>
            </View>
        )
    }



}