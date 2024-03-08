import React from 'react'
import { Button } from './ui/button';
import { RotateCwIcon } from 'lucide-react';

const SubmitButton = ({ label, processing }: { label: string, processing: boolean }) => {
  return (
      <Button disabled={processing} type="submit">
          {processing ? (
              <span className="inline-flex">
                  <RotateCwIcon className="size-5 animate-spin mr-2" />{" "}
                  <span>processing</span>
              </span>
          ) : (
                label
          )}
      </Button>
  );
}

export default SubmitButton