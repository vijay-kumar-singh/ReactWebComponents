import React from 'react';

export interface UserCardProps {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  avatar?: string;
  title?: string;
  theme?: 'light' | 'dark';
}

export default function UserCard({
  name = 'vijay Singh',
  email,
  phone,
  location,
  avatar = 'https://via.placeholder.com/96',
  title = 'Lead Developer',
  theme = 'light',
}: UserCardProps) {
  const isDark = theme === 'dark';
  return (
    <div
      className={[
        'max-w-sm w-full rounded-xl p-6 shadow-lg border',
        isDark
          ? 'bg-gray-900 text-white border-gray-800'
          : 'bg-white text-gray-900 border-gray-200',
      ].join(' ')}
    >
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-500/30"
        />
        <div>
          <h2 className="text-xl font-bold leading-tight">{name}</h2>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{title}</p>
        </div>
      </div>

      <div className="mt-4 space-y-1 text-sm">
        {email && (
          <p>
            <span className="font-medium">Email:</span> {email}
          </p>
        )}
        {phone && (
          <p>
            <span className="font-medium">Phone:</span> {phone}
          </p>
        )}
        {location && (
          <p>
            <span className="font-medium">Location:</span> {location}
          </p>
        )}
      </div>
    </div>
  );
}
