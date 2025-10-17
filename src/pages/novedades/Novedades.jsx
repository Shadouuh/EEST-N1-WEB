import React, { useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder, MdComment, MdShare, MdClose, MdPoll } from 'react-icons/md';
import './novedades.css';
import novedadesData from '../../data/novedadesData.json';

const Novedades = () => {
    const [selectedNews, setSelectedNews] = useState(null);
    const [newsData, setNewsData] = useState([]);
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState('');
    const [votes, setVotes] = useState({});

    useEffect(() => {
        setNewsData(novedadesData);
        // Inicializar likes y comentarios desde localStorage o valores por defecto
        const savedLikes = JSON.parse(localStorage.getItem('newsLikes')) || {};
        const savedComments = JSON.parse(localStorage.getItem('newsComments')) || {};
        const savedVotes = JSON.parse(localStorage.getItem('newsVotes')) || {};
        setLikes(savedLikes);
        setComments(savedComments);
        setVotes(savedVotes);
    }, []);

    const handleLike = (newsId) => {
        const newLikes = {
            ...likes,
            [newsId]: {
                liked: !likes[newsId]?.liked,
                count: likes[newsId]?.liked 
                    ? (likes[newsId]?.count || 0) - 1 
                    : (likes[newsId]?.count || 0) + 1
            }
        };
        setLikes(newLikes);
        localStorage.setItem('newsLikes', JSON.stringify(newLikes));
    };

    const handleComment = (newsId) => {
        if (newComment.trim()) {
            const newComments = {
                ...comments,
                [newsId]: [
                    ...(comments[newsId] || []),
                    {
                        id: Date.now(),
                        text: newComment,
                        author: 'Usuario',
                        timestamp: new Date().toLocaleString()
                    }
                ]
            };
            setComments(newComments);
            localStorage.setItem('newsComments', JSON.stringify(newComments));
            setNewComment('');
        }
    };

    const handleVote = (newsId, optionIndex) => {
        const newVotes = {
            ...votes,
            [newsId]: {
                ...votes[newsId],
                [optionIndex]: (votes[newsId]?.[optionIndex] || 0) + 1,
                userVoted: true
            }
        };
        setVotes(newVotes);
        localStorage.setItem('newsVotes', JSON.stringify(newVotes));
    };

    const openModal = (news) => {
        setSelectedNews(news);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedNews(null);
        document.body.style.overflow = 'auto';
    };

    const NewsCard = ({ news, isModal = false }) => {
        const newsLikes = likes[news.id] || { liked: false, count: news.initialLikes || 0 };
        const newsComments = comments[news.id] || [];
        const newsVotes = votes[news.id] || {};

        return (
            <div className={`news-card ${isModal ? 'modal-content' : ''}`}>
                <div className="news-header">
                    <div className="news-author">
                        <img src={news.authorAvatar} alt={news.author} className="author-avatar" />
                        <div className="author-info">
                            <h4>{news.author}</h4>
                            <span className="news-date">{news.date}</span>
                        </div>
                    </div>
                    {isModal && (
                        <button className="close-modal" onClick={closeModal}>
                            <MdClose />
                        </button>
                    )}
                </div>

                <div className="news-content">
                    <h3>{news.title}</h3>
                    {news.image && (
                        <img src={news.image} alt={news.title} className="news-image" />
                    )}
                    <p className="news-description">
                        {isModal ? news.fullContent : news.description}
                    </p>

                    {news.poll && isModal && (
                        <div className="news-poll">
                            <h4><MdPoll /> {news.poll.question}</h4>
                            <div className="poll-options">
                                {news.poll.options.map((option, index) => {
                                    const voteCount = newsVotes[index] || 0;
                                    const totalVotes = Object.values(newsVotes).reduce((sum, count) => 
                                        typeof count === 'number' ? sum + count : sum, 0);
                                    const percentage = totalVotes > 0 ? (voteCount / totalVotes * 100).toFixed(1) : 0;
                                    
                                    return (
                                        <div key={index} className="poll-option">
                                            <button 
                                                onClick={() => handleVote(news.id, index)}
                                                disabled={newsVotes.userVoted}
                                                className={newsVotes.userVoted ? 'voted' : ''}
                                            >
                                                <span>{option}</span>
                                                {newsVotes.userVoted && (
                                                    <span className="vote-percentage">{percentage}%</span>
                                                )}
                                            </button>
                                            {newsVotes.userVoted && (
                                                <div 
                                                    className="vote-bar" 
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                <div className="news-actions">
                    <button 
                        className={`action-btn like-btn ${newsLikes.liked ? 'liked' : ''}`}
                        onClick={() => handleLike(news.id)}
                    >
                        {newsLikes.liked ? <MdFavorite /> : <MdFavoriteBorder />}
                        <span>{newsLikes.count}</span>
                    </button>
                    
                    <button className="action-btn comment-btn">
                        <MdComment />
                        <span>{newsComments.length}</span>
                    </button>
                    
                    <button className="action-btn share-btn">
                        <MdShare />
                    </button>
                </div>

                {isModal && (
                    <div className="comments-section">
                        <h4>Comentarios</h4>
                        <div className="comments-list">
                            {newsComments.map((comment) => (
                                <div key={comment.id} className="comment">
                                    <strong>{comment.author}</strong>
                                    <p>{comment.text}</p>
                                    <span className="comment-time">{comment.timestamp}</span>
                                </div>
                            ))}
                        </div>
                        <div className="add-comment">
                            <input
                                type="text"
                                placeholder="Escribe un comentario..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleComment(news.id)}
                            />
                            <button onClick={() => handleComment(news.id)}>Comentar</button>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="novedades-container">
            <div className="novedades-header">
                <h1>Novedades</h1>
                <p>Mantente al día con las últimas noticias y eventos de nuestra institución</p>
            </div>

            <div className="news-feed">
                {newsData.map((news) => (
                    <div key={news.id} onClick={() => openModal(news)}>
                        <NewsCard news={news} />
                    </div>
                ))}
            </div>

            {selectedNews && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <NewsCard news={selectedNews} isModal={true} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Novedades;