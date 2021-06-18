import React from 'react';

const divStyle = {
    color:'black'
};

class About extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <main>
                    <p>
                        Hi! My name is Stuti Misra.
                        I am currently pursuing a Master's of Science in Computer Science at Carnegie Mellon University.
                        I am passionate about working with learning more about machine learning systems, networking,
                        network security. At CMU, I am doing research in challenged networks and applying Federated
                        ML on these networks. I am doing coursework focused on systems, ML, big data, and ML systems.

                        I was previously a Software Engineer at Amazon working on machine learning software used by
                        Fraud Detection Evaluation Platforms. I worked on large ML distributed systems during
                        my time at Amazon.

                        I graduated from University of Albany, SUNY from the Honors College in 2017
                        with a Bachelors Degree in Computer Science and Mathematics. I did my honors thesis on wireless
                        networks. I received the SUNY’s Chancellor Award for Student Excellence, an honor conferred upon
                        less than 1% of SUNY students, as recognition for my achievements there.

                    In my spare time, I enjoy working with students of all ages to increase their interest in STEM,
                        especially Computer Programming. </p>
                </main>
            </div>
        )
    }
}



export default About;