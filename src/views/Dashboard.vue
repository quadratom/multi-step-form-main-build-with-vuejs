<template>
  <KeepAlive>
    <div class="h-screen font-ubuntu">
      <div class="block h-full md:flex">
        <div class="h-[25%] md:h-full w-full md:w-[30%] md:p-5">
          <div
            class="p-4 rounded-xl flex md:items-start items-start md:flex-col md:justify-start justify-center w-full h-full gap-6 text-white bg-[url('/src/assets/bg-sidebar-mobile.svg')] md:bg-[url('/src/assets/bg-sidebar-desktop.svg')] bg-cover"
          >
            <div class="flex gap-3 items-center">
              <div
                class="border-2 flex items-center justify-center border-blue-50 rounded-full h-10 w-10"
                :class="step == 1 ? 'bg-blue-50 text-black' : ' bg-blue-500'"
              >
                <div class="font-bold">1</div>
              </div>
              <div class="md:block hidden">
                <div class="text-slate-400">STEP 1</div>
                <div class="font-bold">YOUR INFO</div>
              </div>
            </div>
            <div class="flex gap-3 items-center">
              <div
                class="border-2 flex items-center justify-center border-blue-50 rounded-full h-10 w-10"
                :class="step == 2 ? 'bg-blue-50 text-black' : ' bg-blue-500'"
              >
                <div class="font-bold">2</div>
              </div>
              <div class="md:block hidden">
                <div class="text-slate-400">STEP 2</div>
                <div class="font-bold">SELECT PLAN</div>
              </div>
            </div>
            <div class="flex gap-3 items-center">
              <div
                class="border-2 flex items-center justify-center border-blue-50 rounded-full h-10 w-10"
                :class="step == 3 ? 'bg-blue-50 text-black' : ' bg-blue-500'"
              >
                <div class="font-bold">3</div>
              </div>
              <div class="md:block hidden">
                <div class="text-slate-400">STEP 3</div>
                <div class="font-bold">ADD-ONS</div>
              </div>
            </div>
            <div class="flex gap-3 items-center">
              <div
                class="border-2 flex items-center justify-center border-blue-50 rounded-full h-10 w-10"
                :class="step == 4 ? 'bg-blue-50 text-black' : ' bg-blue-500'"
              >
                <div class="font-bold">4</div>
              </div>
              <div class="md:block hidden">
                <div class="text-slate-400">STEP 4</div>
                <div class="font-bold">SUMMARY</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-full relative">
          <div class="flex flex-col justify-center items-center w-full">
            <div
              v-if="step == 1"
              class="w-[80%] md:max-w-screen-sm bg-white rounded overflow-hidden shadow-lg mx-auto my-8 p-4 absolute md:static top-[-100px]"
            >
              <h1 class="text-4xl font-bold">Personal info</h1>
              <div class="font-thin text-slate-500">
                please provide your name, address, and phone number
              </div>
              <form class="flex flex-col">
                <div class="py-3">
                  <div class="flex justify-between">
                    <label class="font-bold" for="name">Name</label>
                    <span class="text-red-600" :class="!nameError && 'hidden'"
                      >This field is required</span
                    >
                  </div>
                  <input
                    type="text"
                    class="w-full"
                    placeholder="Name"
                    name="name"
                    required
                    v-model="data.name"
                  />
                </div>
                <div class="py-3">
                  <div class="flex justify-between">
                    <label class="font-bold" for="email">Email Address</label>
                    <span class="text-red-600" :class="!emailError && 'hidden'"
                      >Enter a valid email</span
                    >
                  </div>
                  <input
                    type="email"
                    class="w-full"
                    name="email"
                    placeholder="Email"
                    required
                    v-model="data.email"
                  />
                </div>
                <div class="py-3">
                  <div class="flex justify-between">
                    <label class="font-bold" for="phone">Phone Number</label>
                    <span class="text-red-600" :class="!phoneError && 'hidden'"
                      >Enter a valid Phone number</span
                    >
                  </div>
                  <input
                    type="number"
                    name="phone"
                    class="w-full"
                    placeholder="Phone"
                    required
                    v-model="data.phone"
                  />
                </div>
                <div>
                  <div
                    @click="personalIsValid() && step++"
                    class="cursor-pointer rounded-md float-right p-2 bg-blue-900 text-white"
                  >
                    Next Step
                  </div>
                </div>
              </form>
            </div>
            <div
              v-if="step == 2"
              class="w-[80%] md:max-w-screen-sm bg-white rounded overflow-hidden shadow-lg mx-auto my-8 p-4 absolute md:static top-[-100px]"
            >
              <h1 class="text-4xl font-bold">Select your plan</h1>
              <div class="font-thin text-slate-500">
                You have the option of monthly or yearly billing
              </div>
              <div class="flex flex-col md:flex-row gap-5 my-4">
                <div
                  @click="data.plan = 'Arcade'"
                  :class="
                    data.plan == 'Arcade' && 'bg-slate-50 border-blue-900'
                  "
                  class="rounded-md border-2 p-2 flex md:flex-col md:w-1/3 md:h-48 md:justify-between md:items-start gap-5 items-center"
                >
                  <div><img src="/src/assets/icon-arcade.svg" alt="" /></div>
                  <div>
                    <div class="font-bold">Arcade</div>
                    <div>${{ price.arcade }}/{{ yearly ? 'yr' : 'mo' }}</div>
                    <div v-if="yearly" class="text-slate-800 font-medium">
                      2 month free
                    </div>
                  </div>
                </div>
                <div
                  @click="data.plan = 'Advanced'"
                  :class="
                    data.plan == 'Advanced' && 'bg-slate-50 border-blue-900'
                  "
                  class="rounded-md border-2 p-2 flex md:flex-col md:w-1/3 md:h-48 md:justify-between md:items-start gap-5 items-center"
                >
                  <div><img src="/src/assets/icon-advanced.svg" alt="" /></div>
                  <div>
                    <div class="font-bold">Advanced</div>
                    <div>${{ price.advanced }}/{{ yearly ? 'yr' : 'mo' }}</div>
                    <div v-if="yearly" class="text-slate-800 font-medium">
                      2 month free
                    </div>
                  </div>
                </div>

                <div
                  @click="data.plan = 'Pro'"
                  :class="data.plan == 'Pro' && 'bg-slate-50 border-blue-900'"
                  class="rounded-md border-2 p-2 flex md:flex-col md:w-1/3 md:h-48 md:justify-between md:items-start gap-5 items-center"
                >
                  <div><img src="/src/assets/icon-pro.svg" alt="" /></div>
                  <div>
                    <div class="font-bold">Pro</div>
                    <div>${{ price.pro }}/{{ yearly ? 'yr' : 'mo' }}</div>
                    <div v-if="yearly" class="text-slate-800 font-medium">
                      2 month free
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex gap-6 items-center justify-center bg-blue-50 py-5"
              >
                <div>Monthly</div>
                <div>
                  <Switch @click="yearly = !yearly" :value="yearly" />
                </div>
                <div>Yearly</div>
              </div>

              <div class="my-4">
                <div
                  @click="step--"
                  class="cursor-pointer rounded-md float-left p-2"
                >
                  Go Back
                </div>
                <div
                  @click="data.plan && step++"
                  class="cursor-pointer rounded-md float-right p-2 bg-blue-900 text-white"
                >
                  Next Step
                </div>
              </div>

              <!-- <Toggle /> -->
            </div>
            <div
              v-if="step == 3"
              class="w-[80%] md:max-w-screen-sm bg-white rounded overflow-hidden shadow-lg mx-auto my-8 p-4 absolute md:static top-[-100px]"
            >
              <h1 class="text-4xl font-bold">Pick add-ons</h1>
              <div class="font-thin text-slate-500">
                Add-ons help enhance your gaming experience
              </div>
              <div class="flex flex-col w-full md:flex-row gap-5 my-4">
                <div class="flex flex-col w-full gap-5 my-4">
                  <div
                    :class="addons[0] && 'bg-slate-50 border-blue-900'"
                    class="rounded-md border-2 p-2 flex gap-5 items-center"
                  >
                    <div>
                      <input
                        v-model="addons[0]"
                        type="checkbox"
                        name="online"
                        id=""
                      />
                    </div>
                    <div class="flex flex-1 items-center justify-between">
                      <div>
                        <div class="font-bold text-blue-900">
                          Online service
                        </div>
                        <div>Access to multiplayer game</div>
                      </div>
                      <div class="text-blue-600">
                        +${{ price.online }}/{{ yearly ? 'yr' : 'mo' }}
                      </div>
                    </div>
                  </div>
                  <div
                    :class="addons[1] && 'bg-slate-50 border-blue-900'"
                    class="rounded-md border-2 p-2 flex gap-5 items-center"
                  >
                    <div>
                      <input
                        v-model="addons[1]"
                        type="checkbox"
                        name="online"
                        id=""
                      />
                    </div>
                    <div class="flex flex-1 items-center justify-between">
                      <div>
                        <div class="font-bold text-blue-900">
                          Larger storage
                        </div>
                        <div>Extra 1TB of cloud save</div>
                      </div>
                      <div class="text-blue-600">
                        +${{ price.larger }}/{{ yearly ? 'yr' : 'mo' }}
                      </div>
                    </div>
                  </div>
                  <div
                    :class="addons[2] && 'bg-slate-50 border-blue-900'"
                    class="rounded-md border-2 p-2 flex gap-5 items-center"
                  >
                    <div>
                      <input
                        v-model="addons[2]"
                        type="checkbox"
                        name="online"
                        id=""
                      />
                    </div>
                    <div class="flex flex-1 items-center justify-between">
                      <div>
                        <div class="font-bold text-blue-900">
                          Customization profile
                        </div>
                        <div>Custom theme on your profile</div>
                      </div>
                      <div class="text-blue-600">
                        +${{ price.customizable }}/{{ yearly ? 'yr' : 'mo' }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="my-4">
                <div
                  @click="step--"
                  class="cursor-pointer rounded-md float-left p-2"
                >
                  Go Back
                </div>
                <div
                  @click="step++"
                  class="cursor-pointer rounded-md float-right p-2 bg-blue-900 text-white"
                >
                  Next Step
                </div>
              </div>

              <!-- <Toggle /> -->
            </div>

            <div
              v-if="step == 4"
              class="w-[80%] md:max-w-screen-sm bg-white rounded overflow-hidden shadow-lg mx-auto my-8 p-4 absolute md:static top-[-100px]"
            >
              <!-- {{ periodPrice }} -->
              <h1 class="text-4xl font-bold">Finishing up</h1>
              <div class="font-thin text-slate-500">
                Double-check everything lookOK before confirming
              </div>
              <div class="flex flex-col w-full md:flex-row gap-5 my-4">
                <div class="flex flex-col w-full gap-5 my-4">
                  <div
                    class="bg-blue-50 w-full rounded-md border-2 p-2 flex flex-col gap-5 items-center"
                  >
                    <div class="flex w-full items-center justify-between">
                      <div>
                        <div class="font-bold text-blue-900">
                          {{ data.plan }} {{ yearly ? 'Yearly' : 'Monthly' }}
                        </div>
                      </div>
                      <div class="text-blue-600">
                        +${{ price[data.plan.toLocaleLowerCase()] }}/{{
                          yearly ? 'yr' : 'mo'
                        }}
                      </div>
                    </div>
                    <div v-if="addons.length" class="w-full border-2"></div>
                    <div
                      v-for="(item, index) in addons"
                      :key="index"
                      class="flex w-full items-center"
                    >
                      <div
                        v-if="item"
                        class="flex w-full items-center justify-between"
                      >
                        <div>
                          <div class="font-bold text-blue-900 capitalize">
                            {{ addonsList[index] }}
                          </div>
                        </div>
                        <div class="text-blue-600">
                          +${{ price[addonsList[index].split(' ')[0]] }}/{{
                            yearly ? 'yr' : 'mo'
                          }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between p-4 font-bold">
                    <div>Total(per {{ yearly ? 'year' : 'month' }})</div>
                    <div>${{ total }}/{{ yearly ? 'yr' : 'mo' }}</div>
                  </div>
                </div>
              </div>

              <div class="my-4">
                <div
                  @click="step--"
                  class="cursor-pointer rounded-md float-left p-2"
                >
                  Go Back
                </div>
                <div
                  @click="step++"
                  class="cursor-pointer rounded-md float-right p-2 bg-blue-900 text-white"
                >
                  Finish
                </div>
              </div>

              <!-- <Toggle /> -->
            </div>

            <div
              v-if="step == 5"
              class="w-[80%] md:max-w-screen-sm bg-white rounded overflow-hidden shadow-lg mx-auto my-8 p-4 absolute md:static top-[-100px]"
            >
              <div class="flex flex-col w-full md:flex-row gap-5 my-4">
                <div class="flex flex-col w-full gap-5 my-4">
                  <div
                    class="py-16 w-full rounded-md border-2 p-2 flex flex-col gap-5 items-center"
                  >
                    <img src="/src/assets/icon-thank-you.svg" alt="" />
                    <div>Thank you</div>
                    <div class="text-center">
                      Thank for confirming you subscription! <br />
                      We hope you have fun using our platform, if you ever need
                      support, please feel free to email ust at
                      support@loremgaming.com.
                    </div>
                  </div>
                </div>
              </div>

              <!-- <Toggle /> -->
            </div>
          </div>
          <!-- <div class="bg-green-500 p-4 text-white font-bold" @click="back">
            back
          </div>
          <div class="bg-green-500 p-4 text-white font-bold" @click="step++">
            forward
          </div> -->
        </div>
      </div>
    </div>
  </KeepAlive>
</template>

<script setup lang="ts">
// import Toggle from './../components/toggle.vue';
import Switch from './../components/switch.vue';
import { computed, ref } from 'vue';

const nameError = ref(false);
const emailError = ref(false);
const phoneError = ref(false);

const data = ref({
  name: '',
  email: '',
  phone: '',
  plan: '',
});
const yearly = ref(false);
const addons = ref([]);
const addonsList = ref([
  'online service',
  'larger storage',
  'customizable profile',
]);

const total = computed(() => {
  let result = price.value[data.value.plan.toLowerCase()];

  addons.value.forEach((item, index) => {
    if (item) {
      console.log(result, price.value[addonsList.value[index].split(' ')[0]]);

      result += price.value[addonsList.value[index].split(' ')[0]];
    }
  });
  return result;
});

const periodPrice = computed(() => (yearly.value ? 10 : 1));
const price = computed(() => ({
  arcade: 9 * periodPrice.value,
  advanced: 12 * periodPrice.value,
  pro: 15 * periodPrice.value,
  online: 1 * periodPrice.value,
  larger: 2 * periodPrice.value,
  customizable: 2 * periodPrice.value,
}));

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const personalIsValid = () => {
  !data.value.name ? (nameError.value = true) : (nameError.value = false);
  !emailPattern.test(data.value.email)
    ? (emailError.value = true)
    : (emailError.value = false);
  data.value.phone.length < 10
    ? (phoneError.value = true)
    : (phoneError.value = false);
  if (nameError.value || emailError.value || phoneError.value) {
    return false;
  }
  return true;
};

const step = ref(1);
</script>
