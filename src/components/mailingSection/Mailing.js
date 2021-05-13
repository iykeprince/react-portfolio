import '../mailingSection/Mailing.css';

const Mailing = () => {
    return (
        <div>
            <section class="join">
                <h2>Join my mailing list today!</h2>
                <p>I send out weekly tech related content. Sign up and take advanatage of it</p>
                <form action="">
                    <input type="email" name="email" id="email" placeholder="type email and hit enter to join" required />
                </form>
            </section>
        </div>
    )
}

export default Mailing
