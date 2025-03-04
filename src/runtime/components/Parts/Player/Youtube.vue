<template>
  <div class="hero-video">
    <div id="youtube-video" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  video: {
    type: String,
    required: true,
  },
  playerVars: {
    type: Object,
    default: () => ({}),
  },
  mute: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
});

const videoUrl = ref(null);
const videoPlayer = ref(null);

const extractVideoId = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=|v\/)|youtu\.be\/)([^&?/]+)/
  );
  return match ? match[1] : null;
};

function onYouTubeIframeAPIReady() {
  videoPlayer.value = new YT.Player('youtube-video', {
    videoId: videoUrl.value,
    playerVars: {
      autoplay: Number(props.autoplay),
      controls: 1,
      modestbranding: 1,
      loop: Number(props.loop),
      mute: Number(props.mute),
      ...props.playerVars,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  if (props.mute) {
    event.target.mute();
  }
  if (props.autoplay) {
    event.target.playVideo();
  }
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED && props.loop) {
    videoPlayer.value.seekTo(0);
    videoPlayer.value.playVideo();
  }
}

onMounted(() => {
  videoUrl.value = extractVideoId(props.video);

  if (!videoUrl.value) {
    return;
  }

  if (!window.YT) {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);
  }

  window.onYouTubeIframeAPIReady = () => {
    onYouTubeIframeAPIReady();
  };

  if (window.YT && window.YT.Player) {
    onYouTubeIframeAPIReady();
  }
});
</script>

<style scoped>
.hero-video {
  position: relative;
  width: 100%;
  height: 100%;
}

#youtube-video {
  width: 100%;
  height: 100%;
}
</style>
