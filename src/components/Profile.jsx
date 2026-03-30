import css from "./Profile.module.css"
function Profile({name, tag, location, image, stats}){
    return (
    <>
    <div className={css.profileCard}>
        <div className={css.profileHeader}>
            <div className={css.avatarWrapper}>
                <img className={css.avatarImage} src={image} alt="User avatar" />
            </div>
            <p className={css.name}>{name}</p>
            <p className={css.username}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <ul className={css.statsList}>
            <li className={css.statsItem}>
                <span className={css.statsLabel}>Followers</span>
                <span className={css.statsValue}>{stats.followers}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.statsLabel}>Views</span>
                <span className={css.statsValue}>{stats.views}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.statsLabel}>Likes</span>
                <span className={css.statsValue}>{stats.likes}</span>
            </li>
        </ul>
        </div>
    </>
    );
}

export default Profile;