import React, { useEffect, useState } from 'react';
import clapGif from '../images/clap.gif'; // Import your clap GIF
import userIcon from '../images/icon.jpg'; // Import a user icon
import background from '../images/science1.jpg';

const questions = [
    {
        question: "Which company recently launched the first commercially available quantum computer?",
        options: ["IBM", "Google", "Microsoft", "D-Wave"],
        answer: "IBM"
    },
    {
        question: "What is the name of the NASA rover that landed on Mars in 2021?",
        options: ["Curiosity", "Opportunity", "Perseverance", "Spirit"],
        answer: "Perseverance"
    },
    {
        question: "Which technology is used to create digital representations of physical objects in 3D?",
        options: ["Augmented Reality", "3D Printing", "Virtual Reality", "LiDAR"],
        answer: "LiDAR"
    },
    {
        question: "Which company recently achieved a major milestone in developing self-driving cars?",
        options: ["Tesla", "Waymo", "Uber", "Nuro"],
        answer: "Waymo"
    },
    {
        question: "What is the name of the AI model that became famous for defeating human champions in the game of Go?",
        options: ["AlphaGo", "Deep Blue", "Watson", "GPT-3"],
        answer: "AlphaGo"
    }
];

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [leaderboard, setLeaderboard] = useState([]);
    const [timer, setTimer] = useState(60); // 60 seconds timer
    const [timeTaken, setTimeTaken] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [retryQuiz, setRetryQuiz] = useState(false);

    useEffect(() => {
        const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        setLeaderboard(storedLeaderboard);
    }, []);

    useEffect(() => {
        if (timer > 0 && !showResults && !showLeaderboard) {
            const id = setInterval(() => {
                setTimer(prev => prev - 1);
                setTimeTaken(prev => prev + 1);
            }, 1000);
            setIntervalId(id);
            return () => clearInterval(id);
        } else if (timer === 0) {
            handleSubmit();
        }
    }, [timer, showResults, showLeaderboard]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (selectedOption === null) {
            alert("Please select an answer before proceeding.");
            return;
        }

        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestionIndex] = selectedOption;
        setUserAnswers(newUserAnswers);

        if (currentQuestionIndex === questions.length - 1) {
            handleSubmit();
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null); // Reset selected option for the next question
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOption(userAnswers[currentQuestionIndex - 1] || null);
        }
    };

    const calculateScore = () => {
        return userAnswers.reduce((score, answer, index) => {
            return answer === questions[index].answer ? score + 1 : score;
        }, 0);
    };

    const handleSubmit = () => {
        clearInterval(intervalId); // Stop the timer
        const score = calculateScore();
        setShowResults(true);
        saveScore(score, timeTaken); // Prompt for name after showing results
    };

    const saveScore = (score, timeTaken) => {
        const username = prompt("Enter your name:");

        if (username) {
            const newScore = { username, score, timeTaken };
            const updatedLeaderboard = leaderboard.filter(entry => entry.username !== username);
            updatedLeaderboard.push(newScore);
            const sortedLeaderboard = updatedLeaderboard.sort((a, b) => {
                if (b.score === a.score) {
                    return a.timeTaken - b.timeTaken; // Rank by time taken if scores are equal
                }
                return b.score - a.score; // Rank by score
            });

            localStorage.setItem('leaderboard', JSON.stringify(sortedLeaderboard));
            setLeaderboard(sortedLeaderboard);
        }
    };

    const handleViewLeaderboard = () => {
        const rankedLeaderboard = leaderboard.map((entry, index) => ({
            ...entry,
            rank: index + 1
        }));
        setLeaderboard(rankedLeaderboard);
        setShowLeaderboard(true);
    };

    const handleCloseLeaderboard = () => {
        setShowLeaderboard(false);
    };

    const handleRetryQuiz = () => {
        setRetryQuiz(true);
        setShowResults(false);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setUserAnswers([]);
        setTimer(60);
        setTimeTaken(0);
        setRetryQuiz(false);
    };

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundImage: `url(${background})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '100vh', 
            color: '#000'  // Changed text color to black
        }}>
            {showLeaderboard ? (
                <div style={{ 
                    textAlign: 'center', 
                    padding: '20px', 
                    maxWidth: '600px', 
                    width: '100%', 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjusted to a less bright white
                    borderRadius: '10px', 
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' 
                }}>
                    <h2>Leaderboard</h2>
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center' 
                    }}>
                        {leaderboard.map((entry, index) => (
                            <div key={index} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                marginBottom: '10px', 
                                padding: '10px',
                                width: '100%', 
                                maxWidth: '400px', 
                                backgroundColor: '#f9f9f9', 
                                border: '1px solid #ddd', 
                                borderRadius: '5px', 
                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
                            }}>
                                <img src={userIcon} alt="User Icon" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                                <span style={{ fontWeight: 'bold', marginRight: 'auto' }}>{entry.username}</span>
                                <span style={{ marginRight: '10px' }}>Score: {entry.score}</span>
                                <span style={{ marginRight: '10px' }}>Time: {entry.timeTaken}s</span>
                                <span style={{ color: 'green', fontWeight: 'bold' }}>{entry.rank}{getRankSuffix(entry.rank)}</span>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleCloseLeaderboard}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '20px'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
                    >
                        Close Leaderboard
                    </button>
                </div>
            ) : showResults ? (
                <div style={{ 
                    textAlign: 'center', 
                    padding: '20px', 
                    maxWidth: '600px', 
                    width: '100%', 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjusted to a less bright white
                    borderRadius: '10px', 
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' 
                }}>
                    <h2>Quiz Results</h2>
<p>You scored {calculateScore()} out of {questions.length}</p>
{calculateScore() === questions.length ? (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Awesome!</p>
        <img src={clapGif} alt="Clap" style={{ width: '100px', height: '100px' }} />
    </div>
) : calculateScore() >= questions.length - 1 ? (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Great job!</p>
    </div>
) : (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Try Again</p>
    </div>
)}

                    <button
                        onClick={handleViewLeaderboard}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '20px'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7e34'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
                    >
                        View Leaderboard
                    </button>
                    <button
                        onClick={handleRetryQuiz}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#ffc107',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#e0a800'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#ffc107'}
                    >
                        Retry Quiz
                    </button>
                </div>
            ) : (
                <div style={{ 
                    textAlign: 'center', 
                    padding: '20px', 
                    maxWidth: '600px', 
                    width: '100%', 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjusted to a less bright white
                    borderRadius: '10px', 
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' 
                }}>
                    <h2>Science and Technology Quiz</h2>
                    <p>{questions[currentQuestionIndex].question}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                style={{
                                    padding: '10px 20px',
                                    margin: '5px 0',
                                    width: '100%',
                                    maxWidth: '400px',
                                    backgroundColor: selectedOption === option ? '#007bff' : '#fff',
                                    color: selectedOption === option ? '#fff' : '#007bff',
                                    border: `1px solid ${selectedOption === option ? '#007bff' : '#007bff'}`,
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s, color 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedOption !== option) e.target.style.backgroundColor = '#0056b3';
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedOption !== option) e.target.style.backgroundColor = '#fff';
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px' }}>
                        <button
                            onClick={handlePrevious}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#6c757d',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                display: currentQuestionIndex > 0 ? 'block' : 'none'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
                        >
                            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
                        </button>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <p>Time remaining: {timer} seconds</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const getRankSuffix = (rank) => {
    if (rank % 10 === 1 && rank % 100 !== 11) return 'st';
    if (rank % 10 === 2 && rank % 100 !== 12) return 'nd';
    if (rank % 10 === 3 && rank % 100 !== 13) return 'rd';
    return 'th';
};

export default QuizPage;
