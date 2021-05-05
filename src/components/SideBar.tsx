import { Button } from "./Button";

<<<<<<< HEAD
export function SideBar() {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
=======
interface SideBarProps {
  selectedGenreId: number,
  genres: {
    id: number,
    title: string, 
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }[],
  click: (id: number) => void
}

export function SideBar({genres, selectedGenreId, click}: SideBarProps) {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => {
            click(genre.id)}
          }
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
>>>>>>> side-bar
  )
}