import subprocess
import os

def convert_to_mp3(mp4_file, mp3_file):
    ffmpeg_cmd = [
        "ffmpeg",
        "-i", mp4_file,
        "-vn",
        "-acodec", "libpm3lame",
        "-ab", "192k",
        "-ar", "44100",
        "-y",
        mp3_file
    ]

    try:
        subprocess.run(ffmpeg_cmd, check=True)
        print("Successfuly converted")
    except subprocess.CalledProcessError as e:
        print("No Conversion")

convert_to_mp3()