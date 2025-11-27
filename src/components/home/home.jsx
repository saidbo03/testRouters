import React from "react";
import Card from "../Card/Card";

function Home() {
    const lessonsData = [
        {
          id: 1,
          title: "Introduction to the Course",
          description: "A comprehensive introduction to the course goals and an overview of the tools we will be using.",
          thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
          duration: "05:30",
          videoUrl: "https://www.youtube.com/watch?v=xyz123",
          isCompleted: true,
        },
        {
          id: 2,
          title: "Understanding the Basics",
          description: "Explaining the fundamental concepts and necessary rules to build a strong knowledge base.",
          thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500",
          duration: "12:45",
          videoUrl: "https://www.youtube.com/watch?v=abc456",
          isCompleted: false,
        },
        {
          id: 3,
          title: "Advanced Techniques",
          description: "Learn advanced techniques and professional methods to solve complex problems efficiently.",
          thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500",
          duration: "20:10",
          videoUrl: "https://www.youtube.com/watch?v=def789",
          isCompleted: false,
        }
      ];
      
  return (
    <div className="container">
        <h1 className="title">Courses:</h1>
        <div className="home-page">
        {lessonsData.map((lesson) => (
            <Card
            key={lesson.id}
            id={lesson.id}
            title={lesson.title}
            thumbnail={lesson.thumbnail}
            duration={lesson.duration}
            videoUrl={lesson.videoUrl}
            isCompleted={lesson.isCompleted}
            description={lesson.description}
            />
        ))}
        </div>
    </div>
  );
}

export default Home;
