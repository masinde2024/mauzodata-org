import { Link } from '@inertiajs/react';
import { ArrowRightCircle } from 'lucide-react';
import React from 'react'
import { RouteParams } from '../../../vendor/tightenco/ziggy/src/js';
import { parseArgs } from 'util';

const ActionLink = ({ url, params}: { url: string, params?: RouteParams<string>}) => {
  return (
      <Link href={route(url, params || undefined)} className="text-gray-400 hover:text-indigo-600">
          <ArrowRightCircle
              size={22}
              className="hover:stroke-white hover:fill-indigo-600 transition-colors duration-200"
          />
      </Link>
  );
}

export default ActionLink