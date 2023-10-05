import React from 'react'

const Blog = (props) => {
    return (
        <div className='container' style={{fontFamily: "'Barlow Condensed', 'sans-serif'",color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>The Top 10 Most Difficult-to-Spot Writing Mistakes</h2>
            <img src="https://wordcounter.net/blog/wp-content/uploads/2023/03/top10-writing-mistakes.png" className="card-img-top my-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3">Writing Mistakes</h5>
                <p className="card-text">Writing is like trying to juggle flaming knives while riding a unicycle – it requires skill, precision, and a healthy dose of madness. But even the most seasoned writers can get a little lost in the word jungle, and typos and grammatical blunders can sneak up on them like ninjas in the night. So, without …</p>
                <p className="card-text"><small className ={`text-body-${{color: props.mode === 'dark' ? 'white' : 'secondary'}}`}>Last updated {Date()}</small></p>
            </div>

            <h2 className='my-3'>4 Simple Tips for Great Writing</h2>
            <img src="https://wordcounter.net/blog/wp-content/uploads/2021/10/great-writing.jpg" className="card-img-top my-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3">Simple Tips</h5>
                <p className="card-text">Writing the English language is just as much an art as it is a science. No doubt, your schoolteachers gave you rules to stick to in class. But out in the real world, there’s more leeway than you may have realized. Not to worry. You don’t need a master’s degree in publishing to be a …</p>
                <p className="card-text"><small className ={`text-body-${{color: props.mode === 'dark' ? 'white' : 'secondary'}}`}>Last updated {Date()}</small></p>
            </div>

            <h2 className='my-3'>Avoiding Wordiness: 330 Examples & What to Use Instead</h2>
            <img src="https://wordcounter.net/blog/wp-content/uploads/2020/11/wordiness.jpg" className="card-img-top my-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3">Avoiding Wordiness</h5>
                <p className="card-text">When reading, nothing is more annoying than a pompous text cluttered with redundant expressions. Take a look at this post for a comprehensive list of common cases of wordiness and what you can use instead…</p>
                <p className="card-text"><small className ={`text-body-${{color: props.mode === 'dark' ? 'white' : 'secondary'}}`}>Last updated {Date()}</small></p>
            </div>

            <h2 className='my-3'>The Oxford Comma: The Splice of Life</h2>
            <img src="https://wordcounter.net/blog/wp-content/uploads/2019/04/oxford-comma.jpg" className="card-img-top my-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3">Oxford Comma's</h5>
                <p className="card-text">Debates among writers, editors, teachers, and others who use English are common. One of the longest-standing debates is that over the Oxford comma, aka the serial comma. People arguing over a punctuation mark? As silly as it sounds, it’s been going on for decades. If you’re not aware of this debate, we don’t want you …</p>
                <p className="card-text"><small className ={`text-body-${{color: props.mode === 'dark' ? 'white' : 'secondary'}}`}>Last updated {Date()}</small></p>
            </div>

            <h2 className='my-3'>Who vs. Whom</h2>
            <img src="https://wordcounter.net/blog/wp-content/uploads/2019/03/who-vs-whom.jpg" className="card-img-top my-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3">Who vs Whom</h5>
                <p className="card-text">Who or whom? The question trips up even grammar-lovers. And in many circles, whom is becoming obsolete, which may sadden grammar purists. Although who and whom are similar, each serves a distinct purpose. In order to understand how to use these pronouns correctly, you’ll have to refresh yourself on sentence structure. Once you’ve got this …</p>
                <p className="card-text"><small className ={`text-body-${{color: props.mode === 'dark' ? 'white' : 'secondary'}}`}>Last updated {Date()}</small></p>
            </div>

            <h2 className='my-3'>Affect vs. Effect</h2>
            <img src="https://wordcounter.net/blog/wp-content/uploads/2019/03/affect-vs-effect-550x309.jpg" className="card-img-top my-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3">Affect vs Effect</h5>
                <p className="card-text">Don’t let the difference between affect and effect affect your self-confidence. Learning these two words is a cinch. You might get away with not knowing the difference when speaking, as these two words are usually homophones (soundalikes). But your basic spell-checker won’t always catch a usage error if you type a correctly spelled version of …</p>
                <p className="card-text"><small className ={`text-body-${{color: props.mode === 'dark' ? 'white' : 'secondary'}}`}>Last updated {Date()}</small></p>
            </div>

            <h2 className='my-3'>How to Take Notes: The 10-Step Guide to Note-Taking (Infographic)</h2>
            <img src="https://wordcounter.net/blog/wp-content/uploads/2018/03/cmos-vs-ap.jpg" className="card-img-top my-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3">Take Notes</h5>
                <p className="card-text">Have you ever taken notes during a lecture or meeting, looked at them later, and found them useless? We’ve all done it. Even worse is when somebody asks to borrow your notes and quickly hands them back to you, saying, “Never mind, thanks.” It’s ironic that many schools don’t give lessons on how to study …</p>
                <p className="card-text"><small className ={`text-body-${{color: props.mode === 'dark' ? 'white' : 'secondary'}}`}>Last updated {Date()}</small></p>
            </div>

            <h2 className='my-3'>CMOS vs. AP – Recent Changes & Comparison (Updated 1. Nov. 2021)</h2>
            <img src="https://wordcounter.net/blog/wp-content/uploads/2017/12/word-count.jpg" className="card-img-top my-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3">CMOS</h5>
                <p className="card-text">If you’re a student or professional writer, you’re likely familiar with English style guides. Although you learned many rights and wrongs in your English classes, not every aspect of the language is black or white. Many style guides exist for English, and each serves a different role. Students may be familiar with APA or MLA …</p>
                <p className="card-text"><small className ={`text-body-${{color: props.mode === 'dark' ? 'white' : 'secondary'}}`}>Last updated {Date()}</small></p>
            </div>

            <h2 className='my-3'>The Daily Word Counts of 19 Famous Writers</h2>
            <img src="https://wordcounter.net/blog/wp-content/uploads/2017/11/ideal-length.jpg" className="card-img-top my-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3">Word Counts</h5>
                <p className="card-text">Aspiring writers often have quite a few questions wondering if they are doing everything correctly. Should they sign up for some sort of class on writing to get experience? Do they need a mentor that will guide them along the way? Is it true they have to starve first by giving up their job so …</p>
                <p className="card-text"><small className ={`text-body-${{color: props.mode === 'dark' ? 'white' : 'secondary'}}`}>Last updated {Date()}</small></p>
            </div>
            <h2 className='my-3'>The Ideal Length of Everything You Write Online ( Infographic)</h2>
            <img src="https://wordcounter.net/blog/wp-content/uploads/2021/10/great-writing.jpg" className="card-img-top my-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3">Ideal Length</h5>
                <p className="card-text"> Text length has a huge influence on performance of your content. If there are limits, you need to be efficient. If not, you are free to write as much as you want, but in most cases, less is more. Here’s some best practice advice, backed by research.</p>
                <p className="card-text"><small className ={`text-body-${{color: props.mode === 'dark' ? 'white' : 'secondary'}}`}>Last updated {Date()}</small></p>
            </div>
        </div>

    )
}

export default Blog
