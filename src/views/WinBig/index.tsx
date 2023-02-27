/* eslint-disable react/react-in-jsx-scope */
import Accordion from 'views/About/components/Accordion'
import MrRastaImage from '../../assets/newimage/stake_token.jpg'

export default function WinBig(){

    const AccordionData = [
        {
            title: 'What is the Zon Lion Mint Competition and how can I participate?',
            content: `<p class="mt-4">The Zon Lion Mint Competition is a special event that rewards you for minting new Zion Lions, which are unique NFTs on the Binance Smart Chain. You can participate by minting a Zion Lion from our website before the end of the supply. Each minted Zion Lion will give you a chance to win various prizes, including other NFTs, BUSD, and Pancake Squads.</p>`
        },
        {
            title: 'How many Zion Lions are there in total and what are their different types and rarities?',
            content: `<p class="mt-4">There are 6,200 Zion Lions in total, each with a unique ID number from 1 to 6,200. There are four types of Zion Lions: Farmers (common), Explorers (uncommon), Builders (rare), and Professors (legendary). Each type has different attributes and abilities that affect their value and utility.</p>`
        },
        {
            title: 'How does the stake weight of each Zion Lion minted affect the competition?',
            content: `<p class="mt-4">The stake weight of each Zion Lion minted is 0.18 BNB, which means that each mint costs 0.18 BNB plus gas fees. The stake weight also determines your total stake Value.  For example, if you mint 10 Zion Lions with a total stake weight of 1.8 BNB, and you will get 10 entries for the Entry Round draw.</p>`
        },
        {
            title: 'How do I enter the Entry Round and how many times can I win a Kutant or Badseed NFT?',
            content: `<p class="mt-4">You enter the Entry Round by minting a new Zion Lion from our website before the end of the supply. Every 10 Zion Lions minted will trigger a draw for one Kutant or Badseed NFT among those who minted them. For example, if you minted Zion Lion #4600, you will be entered into a draw with those who minted #4591 to #4600 for one Kutant or Badseed NFT. You can win as many times as you want in this round as long as you keep minting new Zion Lions.</p>`
        },
        {
            title: 'How do I enter the Semi-Final Round and what are the chances of winning a Final Round ticket? ',
            content: `<p class="mt-4">You enter the Semi-Final Round by winning a Kutant or Badseed NFT in the Entry Round draw. Every new milestone of 50 Zion Lions minted will trigger a Semi-Final draw for one Final Round ticket among those who won in the Entry Round draw since then. For example, if you won a Kutant or Badseed NFT when #4600 was minted, you will be entered into a Semi-Final draw with those who won since #4551 when #4650 is minted for one Final Round ticket. </p> <p class="mt-4">You can win as many times as you want in this round as long as you keep winning in the Entry Round draws.</p>`
        },
        {
            title: 'How do I enter the Final Round and what are the prizes for each ticket holder? ',
            content: `<p class="mt-4">You enter the Final Round by winning a Final Round ticket in the Semi-Final draw. There will be a total of 36 tickets issued for the Final Round, corresponding to the number of Semi-Final draws. Players can own multiple tickets to increase their chances. Each Final Round ticket holder will receive $100 BUSD once the final NFT number is minted, for a total value of $3600. A final draw will commence for two chances to win a Pancake Squad each, which is worth about $6000.</p>`
        },
        {
            title: 'What are the rules for listing my Zion Lions on the market and how will it affect my eligibility for the competition? ',
            content: `<p class="mt-4">You can list your Zion Lions on the market at any time, but if you list them below the floor prices, you will be disqualified from the final round, eliminating your tickets from the final draw. The floor prices for no elimination are:</p> <p class="mt-4">Farmers - 0.18 BNB, Explorers - 0.24 BNB, Builders - 0.58 BNB, and Professors - 4.2 BNB.</p>`
        },
        {
            title: 'When will each round of draws take place and how will they be Announced',
            content: `<p class="mt-4">Each round of draws will take place as soon as the corresponding milestone of minted Zion Lions is reached. For example, when #6200 is minted, a Semi-Final draw will take place immediately. The draws will be announced on our website, social media, and Telegram channel.</p>`
        },
        {
            title: 'How can I verify that my Zion Lion ID is entered into each Final round of draws correctly',
            content: `<p class="mt-4">You can verify that your Zion Lion ID is entered into each round of draws by checking our website, where we will display all the eligible IDs for each round.</p>`
        },
        {
            title: 'How can I contact you if I have any questions or issues with the competition or my Zion Lions?',
            content: `<p class="mt-4">You can contact us by sending us an email at zionlabs.info or joining our telegram channel where we have a dedicated team of moderators and admins ready to help you.</p>`
        },
        {
            title: 'What is your vision for Zion Lions as an NFT project and community',
            content: `<p class="mt-4">Our vision for Zion Lions is to create a vibrant and diverse community of NFT enthusiasts who share a passion for art, innovation, and social impact. We want to offer our members various benefits and features such as exclusive access to events, games, rewards, partnerships, collaborations, musical art and more.</p>`
        },
        {
            title: 'What are some other benefits or features of owning a Zion Lion',
            content: `<p class="mt-4">Some other benefits or features of owning a Zion Lion are:</p>
            <ul class="italic mt-4 space-y-3"><li>You can use your Zion Lion as your profile picture or avatar on social media platforms such as Twitter, Instagram, telegram, etc.</li><li>You can trade or sell your Zion Lion on secondary markets such as OpenSea, Rareboard or NFTkey for profit or exchange them for other NFTs that you like. You can stake Zion Lions at BNB value and earn while you hold</li><li>You can join our loyal community of Zionairs who support each other and have fun together in our telegram channel and other social media platforms.</li><li>You can enjoy our regular updates and announcements about new developments and opportunities for our project and community.</li></ul>`
        },
    ]

    return(
        <div>
        <div
          className="flex w-full flex-col bg-opacity-50 bg-left-center-small md:bg-center text-white py-40 items-center"
          style={{
            backgroundImage: `url(${MrRastaImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
          }}
        >
          <h1 className="text-4xl font-bold text-center">How to Win Big with Zion Lion NFTs</h1>
        </div>
    
        <div className="bg-white text-black w-full py-20 md:px-20">
            <div className="container mx-auto px-10 md:px-10 lg:px-0">
              <div className="flex flex-col space-y-8" data-aos="fade-up" data-aos-duration="1000">
                <p className='text-center md:text-left'>
                The Zion Lion Mint Competition is a contest for Zion Lion NFT holders. Zion Lions are unique digital artworks that represent different types of staking tiers. There are farmers, explorers, builders, and professors. Each one has its own personality and style.
                </p>

                <p className='text-center md:text-left'>
                To enter the competition, you need to mint a new Zion Lion NFT from the website. Each mint has a stake weight of 0.18 bnb and there are only 1,816 mints left until the end of the supply. Hurry up and get yours before they run out!
                </p>

                <p  className='text-center md:text-left'>
                The competition has two types of draws: 
                </p>

                <ol style={{listStyle: 'decimal inside'}} className="flex flex-col gap-y-2">
                    <li>
                        Entry round. For every 10 mints, there is an entry round draw where one lucky winner gets a Kutant or Badseed NFT. These are rare and valuable NFTs that you don&apos;t want to miss!
                        </li>
                    <li>
                        For every 50 mints, there is a semi-final round draw where one winner from the last five entry round winners gets a final round ticket. The final round has 36 tickets in total and each ticket holder gets $100 Busd on final lion mint. That&apos;s already a nice return on your investment!
                    </li>
                </ol>

                <p  className='text-center md:text-left'>
                But wait, there&apos;s more! There will also be a final draw for two winners who will each get a pancake squad worth $2000-3000 each. 
                </p>

                <p  className='text-center md:text-left'>
                Pancake squads are one of the hottest NFT collections on Binance Smart Chain right now. They are cute and colorful creatures that have amazing traits and abilities.
                </p>

                <p  className='text-center md:text-left'>
                However, there is one catch: if you list your Zion Lion NFT below the floor price, you will be disqualified from the final round. This is to ensure that only true holders and supporters of Zion Lions can win these prizes.
                    </p>

                    <p  className='text-center md:text-left'>
                    There is also a mini competition for those who sweep the floor and buy Zion Lion NFTs from the secondary market during the Zion Lion competition. If you hold your NFT for four weeks, you will enter a draw for a T4 professor worth $4200 and cash prizes of $150 and $50.
                    </p>

                    <p className='text-center md:text-left'>
                    But beware of wash trade listings, they will be excluded from the competition. This is for true holders only!
                    </p>

<p className='text-center md:text-left'>
    So what are you waiting for? Join the Zion Lion Mint Competition today and win big with Zion Lion NFTs! Follow Zion on telegram and Twitter for more updates and announcements.
</p>

{AccordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} key={title} />
                  ))}

                </div>
            </div>
        </div>
      </div>
    )
}