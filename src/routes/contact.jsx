// function for Contact page
export default function Contact() {
    return (
        <main>
            {/* header */}
            <h2 className="contact-header">Contact Us</h2>
            {/* text */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rutrum quisque non
                tellus orci. Mattis rhoncus urna neque viverra justo nec ultrices. Mi
                ipsum faucibus vitae aliquet nec ullamcorper sit amet. Faucibus a
                pellentesque sit amet porttitor eget dolor morbi non. Feugiat in
                fermentum posuere urna nec. Quis lectus nulla at volutpat diam ut. Ut
                sem viverra aliquet eget sit amet tellus cras adipiscing. Tempor orci
                dapibus ultrices in iaculis nunc sed augue lacus. Id diam maecenas
                ultricies mi eget mauris pharetra et. Semper risus in hendrerit gravida
                rutrum. Non consectetur a erat nam.
            </p>
            <p>
                Lorem ipsum dolor sit amet. Est ratione nesciunt quo veniam magnam et
                molestiae fugiat et libero aliquam. Ut unde dolores ut voluptate aliquam
                et atque minus non necessitatibus corrupti sit dignissimos quam. Non
                totam culpa hic galisum quis sed ratione odit ut quia tenetur est
                debitis sunt sed dolor nostrum. Ut nisi rerum ut tenetur veniam quo sint
                nisi ad galisum dolores est omnis laborum et repellendus dolorem quo
                eveniet quia.
            </p>
            {/* image */}
            <img className="img" src={process.env.PUBLIC_URL + "/img/img3.png"} />;
        </main>
    );
}
