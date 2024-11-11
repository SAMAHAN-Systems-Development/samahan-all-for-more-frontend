import os
import re

def sanitize_filename(filename):
    # Remove spaces and special characters from the filename
    s = filename.replace(' ', '_')
    return re.sub(r'[^a-zA-Z0-9._-]', '', s)

def rename_png_files(directory):
    try:
        for filename in os.listdir(directory):
            if filename.endswith('.png'):
                sanitized_name = sanitize_filename(filename)
                if filename != sanitized_name:
                    old_path = os.path.join(directory, filename)
                    new_path = os.path.join(directory, sanitized_name)
                    os.rename(old_path, new_path)
                    print(f'Renamed: \"{filename}\" to \"{sanitized_name}\"')
        print("Renaming completed.")
    except Exception as e:
        print(f"An error occurred: {e}")

rename_png_files('.')
