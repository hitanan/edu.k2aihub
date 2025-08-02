export interface GameDevLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  technologies: string[];
  gameGenres: string[];
  resources: Resource[];
  caseStudies: CaseStudy[];
  careerOpportunities: string[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  hints: string[];
  expectedOutput: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'tool' | 'engine' | 'tutorial' | 'asset' | 'community';
  description: string;
}

interface CaseStudy {
  title: string;
  studio: string;
  challenge: string;
  solution: string;
  results: string;
  insights: string[];
}

export const gameDevLessons: GameDevLesson[] = [
  {
    id: 'game-design-fundamentals',
    title: 'Bài 1: Game Design Fundamentals',
    description:
      'Học cơ bản về game design: mechanics, dynamics, aesthetics. Thiết kế gameplay loops và player experience để tạo games hấp dẫn.',
    videoUrl: 'https://www.youtube.com/watch?v=zQvWMdWhFBs',
    imageUrl:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '120 phút',
    gameGenres: ['Puzzle', 'Platform', 'Adventure', 'Action'],
    objectives: [
      'Hiểu core game design principles và MDA framework',
      'Thiết kế engaging gameplay mechanics và systems',
      'Tạo balanced difficulty curves và progression systems',
      'Implement player feedback loops và rewards',
      'Analyze successful games và extract design patterns'
    ],
    prerequisites: [
      'Passion cho gaming và interactive experiences',
      'Basic creative thinking và problem-solving skills',
      'Understanding của player psychology',
      'Familiarity với different game genres'
    ],
    technologies: [
      'Game Design Documents (GDD)',
      'Paper Prototyping',
      'Digital Design Tools (Figma, Miro)',
      'Analytics Tools',
      'User Testing Platforms',
      'Balancing Spreadsheets'
    ],
    exercises: [
      {
        title: 'Design a Mobile Puzzle Game',
        description:
          'Tạo complete game design cho mobile puzzle game với unique mechanics và monetization strategy',
        difficulty: 'Trung bình',
        solution:
          '# Mobile Puzzle Game Design: Crystal Cascade\\n\\n## 1. Game Concept & Core Loop\\n\\n### High Concept:\\nMatch-3 puzzle game với elemental magic theme, kết hợp strategic planning và quick reflexes.\\n\\n### Core Gameplay Loop (30-60 seconds):\\n1. **Scan Board:** Player observes current state\\n2. **Plan Moves:** Identify optimal match combinations\\n3. **Execute:** Make 3-5 moves creating cascades\\n4. **Collect Rewards:** Earn gems, power-ups, progress\\n5. **Assess Progress:** Check level completion status\\n\\n### Meta Progression Loop (5-10 minutes):\\n1. **Complete Levels:** Finish 3-5 puzzle levels\\n2. **Unlock Content:** New areas, characters, abilities\\n3. **Upgrade Systems:** Improve power-ups và stats\\n4. **Story Progress:** Advance narrative elements\\n5. **Social Features:** Share achievements, compete\\n\\n## 2. Game Mechanics Design\\n\\n### Primary Mechanics:\\n- **Match-3 Core:** Connect 3+ same-colored crystals\\n- **Elemental System:** Fire, Water, Earth, Air với type advantages\\n- **Cascade Reactions:** Matches trigger chain reactions\\n- **Power-up Creation:** 4+ matches create special crystals\\n- **Mana Collection:** Different elements charge different spells\\n\\n### Secondary Mechanics:\\n- **Limited Moves:** Each level has move constraints\\n- **Objectives Variety:** Clear elements, reach score, collect items\\n- **Obstacles:** Locked crystals, barriers, poison clouds\\n- **Boosters:** Pre-level và in-game power-ups\\n- **Lives System:** Energy regeneration over time',
        requirements: [
          'Create comprehensive Game Design Document',
          'Define core gameplay loop và meta progression',
          'Design balanced difficulty curve',
          'Plan monetization strategy',
          'Include technical implementation roadmap'
        ],
        hints: [
          'Study successful puzzle games like Candy Crush, Bejeweled',
          'Focus on player psychology và motivation',
          'Balance challenge với achievability',
          'Consider accessibility và inclusive design'
        ],
        expectedOutput:
          'Complete game design document với all systems defined và implementation plan'
      }
    ],
    realWorldApplications: [
      'Mobile game development studios',
      'Indie game creation và publishing',
      'Educational game design',
      'Gamification của business applications',
      'Virtual reality experience design'
    ],
    careerOpportunities: [
      'Game Designer',
      'Level Designer',
      'Narrative Designer',
      'Systems Designer',
      'UX Designer for Games',
      'Game Producer'
    ],
    resources: [
      {
        title: 'The Art of Game Design by Jesse Schell',
        url: 'https://artofgamedesign.com',
        type: 'tutorial',
        description:
          'Comprehensive book covering all aspects của game design theory và practice'
      },
      {
        title: "Game Maker's Toolkit",
        url: 'https://www.youtube.com/c/MarkBrownGMT',
        type: 'tutorial',
        description:
          'YouTube channel analyzing game design principles through popular games'
      }
    ],
    caseStudies: [
      {
        title: 'Candy Crush Saga: Psychology-Driven Design',
        studio: 'King',
        challenge:
          'Create addictive yet fair match-3 game với sustainable monetization trong competitive market',
        solution:
          'Combined proven match-3 mechanics với psychological triggers: limited lives, social pressure, và carefully balanced difficulty spikes at monetization points',
        results:
          '$1.5B+ annual revenue, 250M+ monthly active users, top-grossing mobile game for 5+ years',
        insights: [
          'Player psychology understanding crucial cho retention và monetization',
          'Social features amplify engagement và viral growth',
          'Balanced difficulty prevents frustration while encouraging spending',
          'Regular content updates maintain long-term player interest'
        ]
      }
    ]
  },
  {
    id: 'unity-2d-development',
    title: 'Bài 2: Unity 2D Game Development',
    description:
      'Hands-on Unity 2D development: sprites, animations, physics, UI systems. Tạo complete 2D platformer từ concept đến deployment.',
    videoUrl: 'https://www.youtube.com/watch?v=UbPiCgCkHTE',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '180 phút',
    gameGenres: ['Platformer', 'Side-scroller', 'Puzzle-platformer'],
    objectives: [
      'Master Unity 2D workflow và asset management',
      'Implement character controller với smooth movement',
      'Create responsive camera system và parallax backgrounds',
      'Design interactive UI systems và menus',
      'Build complete game với multiple levels và progression'
    ],
    prerequisites: [
      'Basic programming concepts (variables, functions, loops)',
      'Unity installation và basic interface familiarity',
      'Understanding của 2D coordinate systems',
      'Game design fundamentals từ previous lesson'
    ],
    technologies: [
      'Unity 2022.3 LTS',
      'C# Programming',
      '2D Physics System',
      'Animation System',
      'UI Toolkit',
      'Input System'
    ],
    exercises: [
      {
        title: 'Build 2D Platformer "Crystal Runner"',
        description:
          'Tạo complete 2D platformer với character movement, collectibles, enemies, và level progression',
        difficulty: 'Nâng cao',
        solution: `# Unity 2D Platformer Development: "Crystal Runner"

## 1. Project Setup & Architecture

### Project Structure:
\`\`\`
Assets/
├── Scripts/
│   ├── Player/
│   ├── Enemies/
│   ├── Managers/
│   ├── UI/
│   └── Utils/
├── Sprites/
│   ├── Characters/
│   ├── Environment/
│   ├── UI/
│   └── Effects/
├── Animations/
├── Audio/
├── Scenes/
└── Prefabs/
\`\`\`

### Core Systems Architecture:
- **GameManager:** Scene transitions, game state, save/load
- **PlayerController:** Input handling, movement, animations
- **CameraController:** Following, boundaries, smooth transitions
- **LevelManager:** Objectives, completion, progression
- **AudioManager:** Music, SFX, dynamic mixing
- **UIManager:** Menus, HUD, responsive layouts

## 2. Player Controller Implementation

### Movement System (C#):
\`\`\`csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [Header("Movement Settings")]
    public float moveSpeed = 8f;
    public float jumpForce = 16f;
    public float coyoteTime = 0.2f;
    public float jumpBufferTime = 0.2f;
    
    [Header("Physics")]
    public LayerMask groundLayerMask;
    public Transform groundCheck;
    public float groundCheckRadius = 0.2f;
    
    // Private variables
    private Rigidbody2D rb;
    private Animator animator;
    private SpriteRenderer spriteRenderer;
    private AudioSource audioSource;
    
    private float horizontalInput;
    private bool jumpInput;
    private bool isGrounded;
    private float coyoteTimeCounter;
    private float jumpBufferCounter;
    
    // Animation hashes for performance
    private int speedHash;
    private int jumpHash;
    private int groundedHash;
    
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
        spriteRenderer = GetComponent<SpriteRenderer>();
        audioSource = GetComponent<AudioSource>();
        
        // Cache animator parameter hashes
        speedHash = Animator.StringToHash("Speed");
        jumpHash = Animator.StringToHash("Jump");
        groundedHash = Animator.StringToHash("Grounded");
    }
    
    void Update()
    {
        HandleInput();
        CheckGrounded();
        HandleCoyoteTime();
        HandleJumpBuffer();
        HandleMovement();
        HandleJump();
        UpdateAnimations();
    }
    
    void HandleInput()
    {
        horizontalInput = Input.GetAxisRaw("Horizontal");
        
        if (Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.W))
        {
            jumpInput = true;
            jumpBufferCounter = jumpBufferTime;
        }
        else
        {
            jumpInput = false;
        }
    }
    
    void CheckGrounded()
    {
        bool wasGrounded = isGrounded;
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, groundLayerMask);
        
        // Landing sound effect
        if (!wasGrounded && isGrounded)
        {
            PlaySound("Land");
        }
    }
    
    void HandleCoyoteTime()
    {
        if (isGrounded)
        {
            coyoteTimeCounter = coyoteTime;
        }
        else
        {
            coyoteTimeCounter -= Time.deltaTime;
        }
    }
    
    void HandleJumpBuffer()
    {
        if (jumpBufferCounter > 0)
        {
            jumpBufferCounter -= Time.deltaTime;
        }
    }
    
    void HandleMovement()
    {
        // Horizontal movement với smooth acceleration
        float targetVelocity = horizontalInput * moveSpeed;
        rb.velocity = new Vector2(
            Mathf.MoveTowards(rb.velocity.x, targetVelocity, moveSpeed * 2 * Time.deltaTime),
            rb.velocity.y
        );
        
        // Sprite flipping
        if (horizontalInput != 0)
        {
            spriteRenderer.flipX = horizontalInput < 0;
        }
    }
    
    void HandleJump()
    {
        // Jump with coyote time và buffer
        if (jumpBufferCounter > 0 && coyoteTimeCounter > 0)
        {
            rb.velocity = new Vector2(rb.velocity.x, jumpForce);
            jumpBufferCounter = 0;
            coyoteTimeCounter = 0;
            
            PlaySound("Jump");
            
            // Particle effect
            PlayJumpEffect();
        }
        
        // Variable jump height
        if (Input.GetKeyUp(KeyCode.Space) && rb.velocity.y > 0)
        {
            rb.velocity = new Vector2(rb.velocity.x, rb.velocity.y * 0.5f);
        }
    }
    
    void UpdateAnimations()
    {
        animator.SetFloat(speedHash, Mathf.Abs(rb.velocity.x));
        animator.SetBool(jumpHash, !isGrounded && rb.velocity.y > 0.1f);
        animator.SetBool(groundedHash, isGrounded);
    }
    
    void PlaySound(string soundName)
    {
        // Implementation would load và play audio clip
        AudioManager.Instance.PlaySFX(soundName);
    }
    
    void PlayJumpEffect()
    {
        // Instantiate particle effect
        EffectManager.Instance.PlayEffect("JumpDust", groundCheck.position);
    }
    
    void OnDrawGizmosSelected()
    {
        // Visualize ground check trong Scene view
        if (groundCheck != null)
        {
            Gizmos.color = isGrounded ? Color.green : Color.red;
            Gizmos.DrawWireSphere(groundCheck.position, groundCheckRadius);
        }
    }
}
\`\`\`

## 3. Camera System Implementation

### Dynamic Camera Controller:
\`\`\`csharp
public class CameraController : MonoBehaviour
{
    [Header("Target Settings")]
    public Transform target;
    public Vector3 offset = new Vector3(0, 2, -10);
    
    [Header("Follow Settings")]
    public float smoothTime = 0.3f;
    public bool lookAhead = true;
    public float lookAheadDistance = 3f;
    public float lookAheadSmoothTime = 1f;
    
    [Header("Boundaries")]
    public Vector2 minBounds;
    public Vector2 maxBounds;
    
    private Vector3 velocity = Vector3.zero;
    private float lookAheadPos;
    private float lookAheadVelocity;
    private PlayerController playerController;
    
    void Start()
    {
        playerController = target.GetComponent<PlayerController>();
    }
    
    void LateUpdate()
    {
        if (target == null) return;
        
        Vector3 targetPosition = target.position + offset;
        
        // Look ahead system
        if (lookAhead)
        {
            float playerInputX = Input.GetAxisRaw("Horizontal");
            float targetLookAhead = playerInputX * lookAheadDistance;
            
            lookAheadPos = Mathf.SmoothDamp(
                lookAheadPos, 
                targetLookAhead, 
                ref lookAheadVelocity, 
                lookAheadSmoothTime
            );
            
            targetPosition.x += lookAheadPos;
        }
        
        // Apply boundary constraints
        targetPosition.x = Mathf.Clamp(targetPosition.x, minBounds.x, maxBounds.x);
        targetPosition.y = Mathf.Clamp(targetPosition.y, minBounds.y, maxBounds.y);
        
        // Smooth camera movement
        transform.position = Vector3.SmoothDamp(
            transform.position, 
            targetPosition, 
            ref velocity, 
            smoothTime
        );
    }
}
\`\`\`

## 4. Game Systems Implementation

### Collectible System:
\`\`\`csharp
public class Crystal : MonoBehaviour
{
    [Header("Settings")]
    public int pointValue = 10;
    public AudioClip collectSound;
    public GameObject collectEffect;
    
    private bool isCollected = false;
    
    void Start()
    {
        // Idle animation
        StartCoroutine(FloatAnimation());
    }
    
    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Player") && !isCollected)
        {
            CollectCrystal();
        }
    }
    
    void CollectCrystal()
    {
        isCollected = true;
        
        // Update game manager
        GameManager.Instance.AddScore(pointValue);
        GameManager.Instance.CollectCrystal();
        
        // Visual và audio feedback
        if (collectEffect != null)
        {
            Instantiate(collectEffect, transform.position, Quaternion.identity);
        }
        
        AudioManager.Instance.PlaySFX("Crystal");
        
        // Animate collection
        StartCoroutine(CollectAnimation());
    }
    
    IEnumerator FloatAnimation()
    {
        Vector3 startPos = transform.position;
        
        while (!isCollected)
        {
            float newY = startPos.y + Mathf.Sin(Time.time * 2f) * 0.3f;
            transform.position = new Vector3(startPos.x, newY, startPos.z);
            transform.Rotate(0, 0, 90 * Time.deltaTime);
            yield return null;
        }
    }
    
    IEnumerator CollectAnimation()
    {
        float timer = 0f;
        Vector3 startPos = transform.position;
        Vector3 targetPos = startPos + Vector3.up * 2f;
        
        while (timer < 0.5f)
        {
            timer += Time.deltaTime;
            float progress = timer / 0.5f;
            
            transform.position = Vector3.Lerp(startPos, targetPos, progress);
            transform.localScale = Vector3.Lerp(Vector3.one, Vector3.zero, progress);
            
            yield return null;
        }
        
        Destroy(gameObject);
    }
}
\`\`\`

## 5. Level Design & Progression

### Level Structure:
- **Tutorial Level:** Basic movement và jumping
- **Level 1-3:** Core mechanics introduction
- **Level 4-6:** Platforming challenges
- **Level 7-9:** Enemy encounters
- **Level 10:** Boss fight và story conclusion

### Design Principles:
1. **Introduce:** New mechanic trong safe environment
2. **Develop:** Practice mechanic với increasing complexity
3. **Twist:** Combine với previous mechanics
4. **Conclude:** Master-level challenge

### Level Completion Metrics:
- **Primary Objective:** Reach the end portal
- **Secondary Objectives:** Collect all crystals, finish under time limit
- **Star Rating System:** 1-3 stars based on completion criteria

## 6. Audio & Polish

### Audio Implementation:
- **Adaptive Music:** Intensity changes based on player state
- **Spatial Audio:** 3D positioned sound effects
- **Audio Mixing:** Dynamic volume balancing
- **Accessibility:** Visual representations của audio cues

### Juice & Polish Elements:
- **Screen Shake:** Landing impacts, damage effects
- **Particle Systems:** Dust clouds, sparkles, explosions
- **UI Animations:** Smooth transitions, bouncy buttons
- **Responsive Feedback:** Every action has immediate response

## 7. Deployment & Publishing

### Build Settings:
- **Target Platform:** PC (Windows, Mac, Linux)
- **Resolution:** 1920x1080 với scaling support
- **Quality Settings:** Optimized for various hardware
- **Input Support:** Keyboard và gamepad

### Publishing Checklist:
- [ ] All levels tested và balanced
- [ ] Audio levels properly mixed
- [ ] Performance optimized (60+ FPS)
- [ ] Save system implemented
- [ ] Settings menu functional
- [ ] Credits và legal info included

### Distribution Options:
- **Steam:** Premium release ($9.99-$14.99)
- **Itch.io:** Indie-friendly platform
- **Game Jolt:** Free với optional donations
- **Mobile Ports:** iOS/Android versions`,
        requirements: [
          'Set up Unity project với proper folder structure',
          'Implement smooth character controller với C#',
          'Create responsive camera system',
          'Design at least 3 complete levels',
          'Add audio, animations, và visual polish'
        ],
        hints: [
          "Use Unity's built-in 2D physics system effectively",
          'Plan your code architecture before implementing',
          'Test player movement feel extensively',
          'Study reference games for inspiration'
        ],
        expectedOutput:
          'Playable 2D platformer với multiple levels, polished gameplay, và proper game feel'
      }
    ],
    realWorldApplications: [
      '2D mobile game development',
      'Indie game publishing',
      'Educational interactive content',
      'Prototype development for larger projects',
      'Portfolio pieces for game industry applications'
    ],
    careerOpportunities: [
      'Unity Developer',
      '2D Game Programmer',
      'Indie Game Developer',
      'Mobile Game Developer',
      'Technical Game Designer',
      'Tools Programmer'
    ],
    resources: [
      {
        title: 'Unity Learn Platform',
        url: 'https://learn.unity.com',
        type: 'tutorial',
        description:
          'Official Unity tutorials covering 2D development, C# scripting, và game design'
      },
      {
        title: 'Brackeys YouTube Channel',
        url: 'https://www.youtube.com/c/Brackeys',
        type: 'tutorial',
        description:
          'High-quality Unity tutorials for beginners và intermediate developers'
      }
    ],
    caseStudies: [
      {
        title: 'Hollow Knight: Polish & Atmosphere in 2D',
        studio: 'Team Cherry',
        challenge:
          'Create atmospheric 2D Metroidvania với limited budget và small team (3 people)',
        solution:
          'Focused on exceptional art direction, tight controls, và atmospheric audio. Used hand-drawn animations và carefully crafted world design.',
        results:
          '3M+ copies sold, 97% positive Steam reviews, considered modern classic trong Metroidvania genre',
        insights: [
          'Polish và attention to detail can overcome budget limitations',
          'Strong art direction creates memorable experience',
          'Tight controls are foundation của great platformers',
          'Atmospheric audio amplifies emotional impact significantly'
        ]
      }
    ]
  }
];
