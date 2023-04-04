/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={onClick}
      className="
        px-4
        py-3
        hover:bg-neutral-100
        transition
        font-semibold
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;
