const qList = [
  // SECTION ONE
  {
    qNo: 'Q1a',
    title: 'What type of vegetation is along the stream side?',
    responses: [
      {
        score: 16,
        response: 'Trees with dense groundcover e.g. tussock, toetoe, ferns, flax, rushes.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Tall grasses with patchy trees and groundcover.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Patchy trees, groundcover grazed.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Grazed pasture grasses to stream edge.'
      }
    ]
  },
  {
    qNo: 'Q1b',
    title: 'How continuous is the vegetation (other than pasture) in the riparian zone?',
    responses: [
      {
        score: 16,
        response: 'Tall vegetation/trees continuous or with a few small gaps.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Tall vegetation/trees less continuous, a few large gaps or several small gaps.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Frequent breaks in tall vegetation/trees - very patchy.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Many large gaps in tall vegetation/trees or no tall vegetation at all.'
      }
    ]
  },
  {
    qNo: 'Q1c',
    title: 'What is the average width of vegetation (other than pasture) in the riparian zone?',
    responses: [
      {
        score: 32,
        response: 'Greater than 30m.'
      },
      {
        score: 16,
        response: 'Between 10m and 30m.'
      },
      {
        score: 8,
        response: 'Between 1m and 10m.'
      },
      {
        score: 4,
        response: '0m.'
      }
    ]
  },
  {
    qNo: 'Q1d',
    title: 'What percentage of the stream is shaded by plants and stream banks?',
    responses: [
      {
        score: 16,
        response: '50% or greater.'
      },
      {
        score: 8,
        response: 'Between 30% and 50%.'
      },
      {
        score: 4,
        response: 'Between 10% and 30%.'
      },
      {
        score: 2,
        response: 'Little or no shading.'
      }
    ]
  },
  {
    qNo: 'Q1e',
    title: 'How stable are the stream banks?',
    responses: [
      {
        score: 16,
        response: 'Banks stable, rock and soil firmly held by grasses, shrubs and tree roots.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Banks firm but loosely held by grasses and shrubs.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Banks of loose soil held by a patchy layer of grass and shrubs.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Banks unstable, of loose soil or sand easily disturbed.'
      }
    ]
  },
  {
    qNo: 'Q1f',
    title: 'How bad is the erosion around or adjacent to your stream?',
    responses: [
      {
        score: 32,
        response: 'No evidence of erosion in surrounding land area, no scarring on stream banks, no undercutting.'
      },
      {
        score: 24,
        response: null
      },
      {
        score: 16,
        response: 'Some erosion in surrounding land area.  Occasional scarring on stream banks and undercutting.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Moderate erosion in surrounding land.  Eroding banks slowly widening.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Significant erosion in surrounding land area.  Significant areas of stream bank cut away, some loss of farmland.'
      }
    ]
  },
  // SECTION TWO
  {
    qNo: 'Q2a',
    title: 'What type of stream plants and mosses are there?',
    responses: [
      {
        score: 16,
        response: 'Stones either dull in colour or very bright.  Mosses may be present along edge and in pools.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Stones very slippery and dull in colour, with a brownish algae.  Long slimes and/or weeds present in summer.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Green and/or brown long slimes present and/or water cress and other weeds.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Stream choked with long green and/or brown slimes and/or large stream plants.'
      }
    ]
  },
  {
    qNo: 'Q2b',
    title: 'Are there any snags to slow the stream flow?',
    responses: [
      {
        score: 16,
        response: 'Rocks and old logs firmly set in place.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Rocks and logs back filled with sediment.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Rocks and logs loose, moving with floods.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'No obstructions to slow stream flow.'
      }
    ]
  },
  {
    qNo: 'Q2c',
    title: 'How clear is the water?',
    note: 'NB:  Do not assess this category after a period of high rainfall',
    responses: [
      {
        score: 16,
        response: '"Crystal" clear.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Slightly murky.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Murky.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Very muddy.'
      }
    ]
  },
  {
    qNo: 'Q2d',
    title: 'What bugs live in your stream?  Tap HERE for pictures of some insects you may find.',
    // HERE:  will launch a component with images of bugs - TBD
    note: 'NB: To find stream insects look rocks or on water weeds, grass, logs and other debris if your stream has no rocks.',
    responses: [
      {
        score: 16,
        response: 'Lots of mayflies, stoneflies and other types of insects.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Moderate numbers of mayflies and caddisflies, other types of insect may also be found.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Only a few insects found.  No mayflies or stoneflies, but more than just worms and snails.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Worms and snails, but not much else.  Or nothing found at all.'
      }
    ]
  },
  {
    qNo: 'Q2e',
    title: 'How often does your stream overtop its banks?',
    responses: [
      {
        score: 16,
        response: 'Never known to overtop banks.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Overbank flows rare.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Overbank flows occur during some winter storms.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Overbank flows frequent in winter/spring storms.  Alternatively stream channelised and has stop banks'
      }
    ]
  },
  // SECTION THREE
  {
    qNo: 'Q3a',
    title: 'Do stock have access to your stream? (Stock access can be prevented by fencing, trees, steep banks etc).',
    responses: [
      {
        score: 32,
        response: 'Stock do not have access to any of the stream or banks.'
      },
      {
        score: 24,
        response: null
      },
      {
        score: 16,
        response: 'Stock only have access to a small part of the stream.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Stock have access to most of the stream.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Stock have access to the entire stream.'
      }
    ]
  },
  {
    qNo: 'Q3b',
    title: 'What is the potential for the input of sediment to your stream? (e.g. from stream banks, stock damage/trampling, stock crossings, surface runoff, runoff from farm roads, slips/erosion, gravel extraction etc).',
    responses: [
      {
        score: 32,
        response: 'No potential.'
      },
      {
        score: 24,
        response: null
      },
      {
        score: 16,
        response: 'Low potential.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Moderate potential.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'High potential.'
      }
    ]
  },
  {
    qNo: 'Q3c',
    title: 'What is the potential for inputs of contaminants to your stream? (e.g. from spray drift, sprayer washings (sheep dips), effluent ponds, silage pits, dumps, oil and foam, dead animals etc).',
    responses: [
      {
        score: 32,
        response: 'No contamination.'
      },
      {
        score: 24,
        response: null
      },
      {
        score: 16,
        response: 'Low contamination.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Moderate contamination.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'High contamination.'
      }
    ]
  },
  {
    qNo: 'Q3d',
    title: 'Is there any artificial drainage entering the stream? (e.g. tile, mole, storm water, open drains that have vegetation dredged).',
    responses: [
      {
        score: 32,
        response: 'No artificial drainage.'
      },
      {
        score: 24,
        response: null
      },
      {
        score: 16,
        response: 'Sparse artificial drainage.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Moderate amount of aftificial drainage.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Extensive drainage networks.'
      }
    ]
  },
  {
    qNo: 'Q3e',
    title: 'How much fertiliser is used by yourself and neighbours?',
    responses: [
      {
        score: 32,
        response: 'No fertiliser used here or by neighbours.'
      },
      {
        score: 24,
        response: null
      },
      {
        score: 16,
        response: 'Low rates.  Less than 150 kg/ha of super (or equivalent), nitrogen fertilisers not used.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Moderate rates.  150-300 kg/ha of super (or equivalent), low use of nitrogen fertilisers.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'High rates.  More than 300 kg/ha of super (or equivalent), moderate use of nitrogen fertilisers'
      }
    ]
  },
  // SECTION FOUR
  {
    qNo: 'Q4a',
    title: 'What is the dominant land use 1km upstream?',
    responses: [
      {
        score: 32,
        response: 'Ungrazed native forest, wetlands and/or tussock grasslands.'
      },
      {
        score: 24,
        response: null
      },
      {
        score: 16,
        response: 'Disturbed native forest, wetlands and/or tussock grasslands.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Exotic forestry and/or sheep and beef farming.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Intensive farming: dairy or red deer.  Cropping systems or urban land use.'
      }
    ]
  },
  {
    qNo: 'Q4b',
    title: 'What is the dominant land use here?',
    responses: [
      {
        score: 32,
        response: 'Ungrazed native forest, wetlands and/or tussock grasslands.'
      },
      {
        score: 24,
        response: null
      },
      {
        score: 16,
        response: 'Disturbed native forest, wetlands and/or tussock grasslands.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Exotic forestry and/or sheep and beef farming.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Intensive farming: dairy or red deer.  Cropping systems or urban land use.'
      }
    ]
  },
  {
    qNo: 'Q4c',
    title: 'What is the dominant type of stock in the area?',
    responses: [
      {
        score: 32,
        response: 'No stock.  Stream is not in pastoral land, or stock is rarely grazed on surrounding land.'
      },
      {
        score: 24,
        response: null
      },
      {
        score: 16,
        response: 'Sheep and/or goats.  Pests or feral animals may graze any remnant areas.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Intensive cattle farming on easy country or arable land.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Intensive dairy or deer farming, or cattle intensively managed on hill country.'
      }
    ]
  },
  {
    qNo: 'Q4d',
    title: 'What type of country does your stream run through?',
    responses: [
      {
        score: 16,
        response: 'Mountain/hill country.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Rolling country.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Inland flat country.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Coastal country.'
      }
    ]
  },
  {
    qNo: 'Q4e',
    title: 'Are there any natural drainage pathways within 100m of you? (e.g. where runoff is directed into a gully or ephemeral type channel and then into a stream - a large amount of runoff enters the stream at one point.)',
    responses: [
      {
        score: 16,
        response: 'No natural drainage pathways within 100m.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: '1 natural drainage pathway within 100m.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: '2-3 natural drainage pathways within 100m'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'More than 3 natural drainage pathways within 100m'
      }
    ]
  },
  // SECTION 5
  {
    qNo: 'Q5a',
    title: 'How big is your stream?',
    responses: [
      {
        score: 32,
        response: 'Large lowland river, 15-100m wide.'
      },
      {
        score: 16,
        response: 'Small river, 5-15m wide.'
      },
      {
        score: 8,
        response: 'Medium stream, 2-5m wide'
      },
      {
        score: 4,
        response: 'Small stream, 0-2m wide'
      }
    ]
  },
  {
    qNo: 'Q5b',
    title: 'How deeply incised are your stream banks?',
    responses: [
      {
        score: 16,
        response: 'Top of stream banks 10m or higher above stream.'
      },
      {
        score: 8,
        response: 'Top of stream banks 10-5m above stream.'
      },
      {
        score: 4,
        response: 'Top of stream banks 5-1m above stream.'
      },
      {
        score: 2,
        response: 'Top of stream banks 1m or less above stream.'
      }
    ]
  },
  {
    qNo: 'Q5c',
    title: 'What is on the streambed?',
    responses: [
      {
        score: 16,
        response: 'Rocks and stones of different sizes, tightly packed together.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Stones, silt present in gaps between rocks/stones.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Gravel, sand and silt.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Sand and silt, stones absent.'
      }
    ]
  },
  {
    qNo: 'Q5d',
    title: 'How cohesive are the soils of the streambank?',
    responses: [
      {
        score: 16,
        response: ' Very cohesive.  Mostly rock and cemented material (boulders and bedrock).'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Reasonably cohesive.  Tightly packed gravel or sand in a clayey matrix.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Loose soils with fine aggregates.  Tightly packed sands or gravels with some silt or clay.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Very loose soils.  Loosely packed sandy, gravelly or pumice materials.'
      }
    ]
  },
  {
    qNo: 'Q5e',
    title: 'How well do your soils drain after rain? LAST QUESTION YO',
    responses: [
      {
        score: 16,
        response: 'Deep, well draining soils that slow down the recharge of water to waterways and drains.'
      },
      {
        score: 12,
        response: null
      },
      {
        score: 8,
        response: 'Moderately well draining soils, but soils are water-logged for long periods in winter.'
      },
      {
        score: 6,
        response: null
      },
      {
        score: 4,
        response: 'Excessively well draining soils - water moves freely through the soil reaching waterways rapidly.  Sandy/porous soils.'
      },
      {
        score: 3,
        response: null
      },
      {
        score: 2,
        response: 'Poorly draining soils. Soils water-logged for long periods after rain, surface ponding occurs in low areas.  Heavy textured soils.'
      }
    ]
  }
]

export default qList
