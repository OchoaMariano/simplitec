 <template>
    <div class="w-24">
    <Listbox v-model="$i18n.locale">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full text-primary cursor-default rounded-lg bg-white py-1 pl-3 pr-8 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <li
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-7 pr-4',
                ]"
              >
          <span class="block ">{{ $i18n.locale }}</span>
          <span
            
            class="absolute inset-y-0 left-0 flex items-center"
          >   
            <img v-show="$i18n.locale === 'Eng' " class="h-5 w-5" aria-hidden="true" src="../../assets/images/eng-flag.png"/>
            <img v-show="$i18n.locale === 'Esp' " class="h-5 w-5" aria-hidden="true" src="../../assets/images/es-flag.png"/>
            
          </span>
          </li>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
              as="template"
              
            >
              <li
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ locale }}</span
                >
                <span
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                > 
                  <img v-show="locale === 'Esp'" class="h-5 w-5" aria-hidden="true" src="../../assets/images/es-flag.png" />
                </span>
                <span
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                > 
                  <img v-show="locale === 'Eng'" class="h-5 w-5" aria-hidden="true" src="../../assets/images/eng-flag.png" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon, TranslateIcon, ChevronDownIcon } from '@heroicons/vue/solid'


</script>
