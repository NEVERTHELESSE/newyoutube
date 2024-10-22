import pafy

url = 'http://youtube.com/watch?v=9bZkp7q19f0'
video = pafy.new(url)
streams = video.streams

for i in streams:
    print(i)

best = video.getbest()
print(best.resolution)

best.download()

# import pafy

# try:
#     video = pafy.new(url)
# except OSError as e:
#     print("Error:", e)