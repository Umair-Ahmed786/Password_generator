import React, { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { NewsItem } from './NewsItem'
import Button from 'react-bootstrap/Button';
import { Spinner } from './Spinner';

export const News = ({ setprogress, category }) => {

    const [loading, setLoading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalpage, settotalpage] = useState(0);
    const [newsarray, setnewsarray] = useState([
        // const newsarray = [

        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Steve Kerr Says Klay Thompson Will Continue to Come Off the Bench - Bleacher Report",
            "description": "Steve Kerr comments on his decision to have Klay Thompson come off the bench. Thompson had a season-high 35 points against the Utah Jazz.Subscribe: https://w...",
            "url": "https://www.youtube.com/watch?v=N5QgL4EDTG8",
            "urlToImage": "https://i.ytimg.com/vi/N5QgL4EDTG8/maxresdefault.jpg",
            "publishedAt": "2024-02-16T05:42:36Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Ben Pickman",
            "title": "Caitlin Clark sets NCAA women’s basketball scoring record with 3,528th career point - The Athletic",
            "description": "Clark unseated former Washington star Kelsey Plum's scoring record.",
            "url": "https://theathletic.com/5265758/2024/02/15/caitlin-clark-all-time-scoring-record-iowa-michigan/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/02/15203604/gettyimages-2006240531-594x594-1.jpg",
            "publishedAt": "2024-02-16T05:33:05Z",
            "content": "Making history has become almost routine through Caitlin Clarks senior year. With rabid Hawkeyes fans supporting her at home and on the road, she has blown past offensive markers with the same unique… [+9979 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters UK",
            "title": "Britain's Labour Party deals double blow to PM Sunak's Conservatives - Reuters UK",
            "description": null,
            "url": "https://www.reuters.com/world/uk/britains-labour-party-deals-double-blow-pm-sunaks-conservatives-2024-02-16/",
            "urlToImage": null,
            "publishedAt": "2024-02-16T04:52:30Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Greece legalises same sex marriage in landmark change - Reuters",
            "description": null,
            "url": "https://www.reuters.com/world/europe/yes-equality-says-greek-pm-ahead-same-sex-marriage-vote-2024-02-15/",
            "urlToImage": null,
            "publishedAt": "2024-02-16T04:46:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Tara Suter",
            "title": "Cohen predicts Trump will be convicted ‘on all charges’ in hush money case - The Hill",
            "description": "Michael Cohen, a former personal lawyer for former President Trump, said he thinks that Trump will be convicted “on all charges” in his New York hush money case. “I believe, based upon the information that I know, and based upon, not just the documentary evid…",
            "url": "https://thehill.com/regulation/court-battles/4471672-cohen-predicts-trump-will-be-convicted-on-all-charges-in-hush-money-case/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/06/AP23072595575438-e1686447045705.jpg?w=1280",
            "publishedAt": "2024-02-16T04:06:00Z",
            "content": "Skip to content\r\nMichael Cohen, a former personal lawyer for former President Trump, said he thinks that Trump will be convicted “on all charges” in his New York hush money case.\r\n“I believe, based u… [+1491 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "NASA Telescopes Are Unlocking the Secrets Behind Mysterious Deep Space Signals - SciTechDaily",
            "description": "Using two of the agency’s X-ray telescopes, researchers were able to zoom in on a dead star’s erratic behavior as it released a bright, brief burst of radio waves. What’s causing mysterious bursts of radio waves from deep space? Astronomers may be a step clos…",
            "url": "https://scitechdaily.com/nasa-telescopes-are-unlocking-the-secrets-behind-mysterious-deep-space-signals/",
            "urlToImage": "https://scitechdaily.com/images/Magnetar-FRB-Concept.jpg",
            "publishedAt": "2024-02-16T03:53:30Z",
            "content": "Recent observations by NASA’s X-ray telescopes have provided unprecedented insights into fast radio bursts (FRBs), powerful and brief cosmic events that have puzzled astronomers. By studying a fast r… [+7238 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Russia developing 'troubling' new anti-satellite weapon, US says - BBC.com",
            "description": "Former officials warn that anti-satellite weapons could cripple US communications and systems.",
            "url": "https://www.bbc.com/news/world-us-canada-68309496",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15BD6/production/_132664098_satellite.jpg",
            "publishedAt": "2024-02-16T03:03:10Z",
            "content": "By Bernd Debusmann JrBBC News, Washington\r\nExperts told the BBC that any weapon could cause chaos for the satellite reliant US (file image)\r\nRussia is developing a \"troubling\" new anti-satellite weap… [+6992 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Hannah Rabinowitz, Evan Perez, Marshall Cohen",
            "title": "Alexander Smirnov: Former FBI informant charged with lying about the Bidens’ role in Ukraine business - CNN",
            "description": "Special counsel David Weiss charged a former FBI informant with lying about President Joe Biden and his son Hunter Biden’s involvement in business dealings with Ukrainian energy company Burisma Holdings, undercutting a major aspect of Republicans’ impeachment…",
            "url": "https://www.cnn.com/2024/02/15/politics/former-fbi-informant-charged-biden-burisma/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1915051396-20240125161205844.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-02-16T02:41:00Z",
            "content": "Special counsel David Weiss charged a former FBI informant with lying about President Joe Biden and his son Hunter Bidens involvement in business dealings with Ukrainian energy company Burisma Holdin… [+5190 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Xbox, Nintendo or PlayStation: does it still matter? - BBC.com",
            "description": "Why the war between the big games console makers may be coming to an end.",
            "url": "https://www.bbc.com/news/technology-68304967",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/509C/production/_132663602_hh.jpg",
            "publishedAt": "2024-02-16T02:39:37Z",
            "content": "By Zoe KleinmanTechnology editor\r\nMy son's favourite game is Minecraft. \r\nHe plays it wherever he can. On his phone, on his tablet, on our PlayStation, on his dad's Xbox. He watches Minecraft videos … [+5806 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Christopher Cann, Cybele Mayes-Osterman, Minnah Arshad, Krystal Nurse",
            "title": "Kansas Chiefs parade shooting live updates: Personal dispute blamed - USA TODAY",
            "description": "Nearly 1 million people were estimated to have been in downtown Kansas City when gunshots sent scores of people running for cover near Union Station.",
            "url": "https://www.usatoday.com/story/news/nation/2024/02/15/kansas-city-chiefs-shooting/72610710007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/15/USAT/72611003007-afp-2003719690.jpg?crop=1023,576,x0,y106&width=1023&height=576&format=pjpg&auto=webp",
            "publishedAt": "2024-02-16T02:26:15Z",
            "content": "A personal dispute between several people erupted in gunfire at a packed celebration of the Kansas City Chiefs' Super Bowl victory, injuring over 20 people and killing a mother of two, authorities sa… [+11985 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": null,
            "title": "Prince Harry races head-first down a skeleton sled track and says 'everybody should do this' - The Associated Press",
            "description": "Prince Harry has raced head-first on a tiny skeleton sled going 61.5 mph down a track at next year's Invictus Games site. He said with a smile afterward “everyone should do this.” Harry was in Whistler, British Columbia, with wife Meghan, the Duchess of Susse…",
            "url": "https://apnews.com/article/prince-harry-meghan-canada-whistler-invictus-games-1296c5af6e25c66f3f0292dd543a9340",
            "urlToImage": "https://dims.apnews.com/dims4/default/73466b3/2147483647/strip/true/crop/3000x1688+0+183/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd8%2F5e%2Ff5b3819c5c57e5b81ad2e56965e8%2F8c463437e0bc46c2b4f3baa750ba6275",
            "publishedAt": "2024-02-16T02:06:26Z",
            "content": "WHISTLER, British Columbia (AP) Prince Harry raced head-first on a tiny skeleton sled going 99 kph (61.5 mph) down a track at next years Invictus Games site Thursday, saying with a smile afterward th… [+1712 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ryan Morik",
            "title": "Tiger Woods hits brutal shank in return to PGA Tour: 'Been a while' - Fox News",
            "description": "Tiger Woods played his first round of professional golf since July, and most of it was solid. But Woods shanked a shot on the 18th hole.",
            "url": "https://www.foxnews.com/sports/tiger-woods-brutal-shank-return-pga-tour-been-a-while",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/tiger-woods-shank.jpg",
            "publishedAt": "2024-02-16T02:06:00Z",
            "content": "Tiger Woods proved he's human with a shot we've all hit plenty of times on the golf course.\r\nWoods made yet another return to competitive golf Thursday, playing in the Genesis Invitational at Riviera… [+1464 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Ukraine Russia war: US warns Avdiivka could fall - BBC.com",
            "description": "The US and Ukraine admit Ukrainian troops are running out of ammunition in the eastern town of Avdiivka.",
            "url": "https://www.bbc.com/news/world-europe-68313306",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BDA2/production/_132664584_smokereuters.jpg",
            "publishedAt": "2024-02-16T02:03:08Z",
            "content": "By Jaroslav LukivBBC News\r\n\"I will die here\": Evacuation \"angels\" help front-line town's last residents flee\r\nThe US has warned that Russia could seize Ukraine's key eastern town of Avdiivka - the sc… [+4148 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Seven-time makes it in on last lap after intense Duel 1 at Daytona | Extended Highlights - NASCAR",
            "description": "Relive all the action in in Duel No. 1 at Daytona International Speedway that saw a wild finish and Jimmie Johnson race his way into the Daytona 500. #nascar...",
            "url": "https://www.youtube.com/watch?v=RQLGdHX1yNE",
            "urlToImage": "https://i.ytimg.com/vi/RQLGdHX1yNE/maxresdefault.jpg",
            "publishedAt": "2024-02-16T01:38:48Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Israel raids main Gaza hospital as Rafah concerns grow - Reuters",
            "description": null,
            "url": "https://www.reuters.com/world/middle-east/israel-raids-main-gaza-hospital-rafah-concerns-grow-2024-02-15/",
            "urlToImage": null,
            "publishedAt": "2024-02-16T00:36:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Andrew Chung and John Kruzel",
            "title": "Trump cites US Supreme Court obstruction case as reason to delay criminal trial - Yahoo News",
            "description": "Lawyers for Donald Trump on Thursday told the U.S. Supreme Court that the former president's criminal trial on charges of plotting to overturn his 2020...",
            "url": "https://news.yahoo.com/trump-cites-us-supreme-court-001138437.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/749d9a20b29a67c3ac076c0179e366bb",
            "publishedAt": "2024-02-16T00:11:00Z",
            "content": "By Andrew Chung and John Kruzel\r\n(Reuters) - Lawyers for Donald Trump on Thursday told the U.S. Supreme Court that the former president's criminal trial on charges of plotting to overturn his 2020 el… [+3827 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GSMArena.com"
            },
            "author": "Prasad",
            "title": "Bose announces Ultra Open Earbuds - GSMArena.com news - GSMArena.com",
            "description": "Features an open ear design and Bose's proprietary spatial audio. Bose has announced the new Ultra Open Earbuds, a pair of Bluetooth wireless earbuds that...",
            "url": "https://www.gsmarena.com/bose_announces_ultra_open_earbuds_with_an_open_ear_design-news-61618.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/02/bose-ultra-open/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2024-02-15T23:47:01Z",
            "content": "Bose has announced the new Ultra Open Earbuds, a pair of Bluetooth wireless earbuds that feature an open ear design. The goal here is to be able to listen to your content while being fully aware of y… [+1983 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Mike Snider",
            "title": "About that AMC Networks class action lawsuit settlement email. Here's what it means to you - USA TODAY",
            "description": "Did you get an email about a class action settlement involving AMC Networks and its AMC+ and other streaming networks? Here's what it means.",
            "url": "https://www.usatoday.com/story/money/2024/02/15/amc-class-action-lawsuit-settlement-email/72617976007/",
            "urlToImage": "https://www.usatoday.com/gcdn/presto/2022/04/18/USAT/cb8346a9-5f75-4746-9765-cae95304b769-better_call_saul_3.jpg?crop=1911,1075,x0,y0&width=1911&height=1075&format=pjpg&auto=webp",
            "publishedAt": "2024-02-15T23:43:22Z",
            "content": "If you subscribed to and streamed AMC+ or any of its other video networks you may have an award coming your way.\r\nYou may have already gotten an email about the settlement in a class action suit file… [+2584 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "SpaceX launches Starlink batch on 3rd mission in less the 24 hours, nails landing - VideoFromSpace",
            "description": "A SpaceX Falcon 9 rocket launched 22 Starlink satellites from Space Launch Complex 4 East (SLC-4E) at Vandenberg Space Force Base in California on Feb. 15, 2...",
            "url": "https://www.youtube.com/watch?v=sbJXdX9VFQ0",
            "urlToImage": "https://i.ytimg.com/vi/sbJXdX9VFQ0/maxresdefault.jpg",
            "publishedAt": "2024-02-15T23:31:01Z",
            "content": null
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "STEPHEN GROVES, ERIC TUCKER",
            "title": "Special counsel who questioned Biden's memory to testify at House hearing - The Associated Press",
            "description": "House Republicans will hold a public hearing next month with the special counsel who found evidence that President Joe Biden had mishandled classified information when he was out of office but also concluded that criminal charges were not warranted. The House…",
            "url": "https://apnews.com/article/republican-hearing-biden-age-cf655fcb6d95592d42af81fe4b9feb1c",
            "urlToImage": "https://dims.apnews.com/dims4/default/125da15/2147483647/strip/true/crop/4350x2447+0+340/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1e%2F6a%2Fb842e31be0e4054d1a5588f09283%2F3b517a12213442b1b2260936b056f9ef",
            "publishedAt": "2024-02-15T23:16:00Z",
            "content": "WASHINGTON (AP) Seeking to keep a spotlight on President Joe Bidens age, House Republicans will hold a public hearing next month with the Justice Department special counsel who found evidence that th… [+2799 chars]"
        }
    ]);

    const getnews = async () => {
        setLoading(true)
        setprogress(10);
        console.log("I am in getnews...");
        setprogress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=509937a096804580aa23b5560452a4a8&pageSize=9`;
        let response = await fetch(url);
        setprogress(30);
        var data = await response.json();
        setprogress(60);
        setnewsarray(data.articles);
        settotalpage(data.totalResults);
        setprogress(70);
        setLoading(false);
        document.title = `${category.toUpperCase()}-NewsGorilla`;
        setprogress(100);
    };

    useEffect(() => {
        getnews();
    }, []);


    const fetchMoreData = async () => {
        
        setpage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=509937a096804580aa23b5560452a4a8&page=${page}&pageSize=9`;
        // setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        // setnewsarray(data.articles);
        setnewsarray([...newsarray, ...data.articles]);
        setLoading(false);
        console.log(totalpage);
    }

   
    
    return (
        <>
            <div className="container-fluid my-3">
                {/* <div className="container"> */}
                    <h1 className='text-center' style={{marginTop: '90px'}}>NewsGorilla - {category.charAt(0).toUpperCase() + category.slice(1)}</h1>


                    <InfiniteScroll
                        dataLength={newsarray.length}
                        next={fetchMoreData}
                        hasMore={newsarray.length > 0 && newsarray.length <= totalpage}
                        loader={<Spinner/>}
                    >
                        <div className="container">
                        {loading ? (<p><Spinner /></p>) :
                           
                           (<div className="row mt-3" style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly' }}>


                           

                                {newsarray.map((newsItem) => (
                                    <div key={newsItem.url} className="col-md-3 col-sm-12 col-lg-4 mt-3">
                                        <NewsItem
                                            title={newsItem.title}
                                            description={newsItem.description?.slice(0, 88)}
                                            image={newsItem.urlToImage}
                                            url={newsItem.url}
                                            author={newsItem.author}
                                            date={new Date(newsItem.publishedAt).toGMTString()}
                                            source={newsItem.source.name}
                                        />
                                    </div>
                                ))}

                           


                            </div>)}
                             </div>

                    </InfiniteScroll>

                    {/* <div className="d-flex justify-content-between mt-5">
                        <Button disabled={page <= 1} variant="primary" className='btn btn-dark' onClick={handle_previous}>Privious</Button>
                        <Button disabled={page >= Math.ceil(totalpage / 9)} variant="secondary" className='btn btn-dark' onClick={handle_next}>Next</Button>
                    </div> */}



</div>
        </>
    )
}
