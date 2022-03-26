// import links
import React from "react";
import { Link, Outlet } from "react-router-dom";
// function for Projects page
export default function Projects() {
    return (
        <main>
            {/* header */}
            <h2 className="projects-header">Projects</h2>
            {/* links to pages project one and project two */}
            <div className="projects">
                <div className="projects-nav">
                    <Link to="/projects/one"> Project One </Link>|{" "}
                    <Link to="/projects/two"> Project Two </Link>
                </div>
                {/* outlet */}
                <Outlet />
            </div>
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
            <p>
                Lorem ipsum dolor sit amet. Sed reiciendis aspernatur est architecto
                optio eum autem voluptates aut voluptatem provident et fuga quae est
                dignissimos quia assumenda sint. Aut numquam quia et quis odit non
                aperiam cupiditate ea assumenda velit id nesciunt corrupti eum adipisci
                vero et nobis sunt? Ea quia architecto qui autem nulla sed officia quia.
                Quo enim commodi et suscipit animi id odit maxime? Eos adipisci maiores
                ut galisum explicabo aut necessitatibus recusandae vel nemo commodi ut
                sint sunt et tempore tenetur aut veritatis dicta. Sunt repudiandae aut
                rerum veritatis est iste molestiae non praesentium explicabo aut magnam
                voluptas qui labore itaque. Et maiores laudantium aut voluptatem
                repudiandae et labore eligendi aut dignissimos voluptate. Ea dignissimos
                quod et excepturi magnam est iste quia. Qui impedit temporibus qui
                facere nihil et doloremque atque a galisum debitis ab maxime officia est
                magnam atque aut ipsam officia?
            </p>
            {/* image */}
            <img className="img" src={process.env.PUBLIC_URL + "/img/img4.png"} />;
        </main>
    );
}
