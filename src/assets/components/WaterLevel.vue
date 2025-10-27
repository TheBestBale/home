<template>
  <div class="water-level-container">
    <div class="label">Water Level</div>
    <div class="tank">
      <div class="water" :style="{ height: percentage + '%' }">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>
      <div class="percent-label">{{ percentage }}% full</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaterLevel',
  props: {
    percentage: {
      type: Number,
      required: true,
      validator: (val) => val >= 0 && val <= 100
    }
  }
}
</script>

<style scoped lang="scss">
.water-level-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 1.1rem;
  }

  .tank {
    position: relative;
    width: 120px;
    height: 200px;
    border: 2px solid #aaa;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f9f9f9;
  }

  .water {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(to top, #4fc3f7, #81d4fa);
    overflow: hidden;
    transition: height 0.5s ease;

    .wave {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 200%;
      height: 20px;
      background-repeat: repeat-x;
      background-size: 50% 100%;
      opacity: 0.3;
    }

    .wave1 {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 120 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,10 Q30,0 60,10 T120,10 V20 H0 Z' fill='white'/%3E%3C/svg%3E");
      animation: wave1 3.7s linear infinite;
      transform: scaleY(1.2); // 👈 Make this wave taller
    }

    .wave2 {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 120 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,10 Q30,0 60,10 T120,10 V20 H0 Z' fill='white'/%3E%3C/svg%3E");
      animation: wave2 5s linear infinite reverse;
      //opacity: 0.5;
    }
    .wave3 {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 120 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,10 Q30,0 60,10 T120,10 V20 H0 Z' fill='white'/%3E%3C/svg%3E");
      animation: wave3 2.3s linear infinite;
      //opacity: 0.3;
    }
  }

  .percent-label {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-weight: bold;
    color: #333;
    z-index: 1;
  }
}

@keyframes wave1 {
  0% {
    transform: translateX(0) scaleY(2);
  }
  50% {
    transform: translateX(-25%) scaleY(1);
  }
  100% {
    transform: translateX(-50%) scaleY(2);
  }
}

@keyframes wave2 {
  0% {
    transform: translateX(0) scaleY(1.2);
  }
  60% {
    transform: translateX(-25%) scaleY(1);
  }
  100% {
    transform: translateX(-50%) scaleY(1.2);
  }
}
@keyframes wave3 {
  0% {
    transform: translateX(0) scaleY(1);
  }
  40% {
    transform: translateX(-25%) scaleY(1.3);
  }
  100% {
    transform: translateX(-50%) scaleY(1);
  }
}
</style>
