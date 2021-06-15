from app.models import db, Post
from sqlalchemy import Date, DateTime
import datetime


def seed_posts():

    toga = Post(title='Himiko Toga', body_content='best girl',
                user_id=2, media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96ab952e-d713-48f3-b2c7-8d537e61df27/dca00vo-8fdb735f-d2cb-4831-acc6-6ff1cf34edde.jpg/v1/fill/w_894,h_894,q_70,strp/himiko_toga_by_mcdobo_dca00vo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvOTZhYjk1MmUtZDcxMy00OGYzLWIyYzctOGQ1MzdlNjFkZjI3XC9kY2EwMHZvLThmZGI3MzVmLWQyY2ItNDgzMS1hY2M2LTZmZjFjZjM0ZWRkZS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FQUiyDZMF8YpQlriqkCcqrbR07c-TuvDrp00hJJVs5Y'
                )
    jiro = Post(title='Kyouka Jiro', body_content='favorite girl',
                user_id=2, media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96ab952e-d713-48f3-b2c7-8d537e61df27/dbnenep-b9204a78-aa24-4792-a3e5-aa5c510033e9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2YWI5NTJlLWQ3MTMtNDhmMy1iMmM3LThkNTM3ZTYxZGYyN1wvZGJuZW5lcC1iOTIwNGE3OC1hYTI0LTQ3OTItYTNlNS1hYTVjNTEwMDMzZTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nSORXz9_G2z2wSPMvwNuqtgOxETVdsHe6zSmgA6tijc'
                )
    background = Post(title='Castle', body_content='A castle, took me longer than exepcted :(',
                      user_id=1, media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2db09b32-1bed-436f-9386-abbebbb514ce/dejquk3-f05e435f-fdd0-406c-97a0-bd8e005f83c9.jpg/v1/fill/w_1280,h_651,q_75,strp/citadel___illustration_by_bymaker_dejquk3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUxIiwicGF0aCI6IlwvZlwvMmRiMDliMzItMWJlZC00MzZmLTkzODYtYWJiZWJiYjUxNGNlXC9kZWpxdWszLWYwNWU0MzVmLWZkZDAtNDA2Yy05N2EwLWJkOGUwMDVmODNjOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ijbEqSs29PKT-qgIzrqCDPNawi7NqkqvHaKSflspdL8'
                      )
    kimetsu = Post(title='Tanjiro & Kanao', body_content='Not all heros wear capes',
                   user_id=3, media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f91b7c0-fa6f-4cfd-9a5d-639a7e206906/ddrdpe3-31dcae0d-186c-4bdb-a1f7-cb1a67cf7a8d.jpg/v1/fill/w_900,h_533,q_75,strp/not_all_heroes_wear_capes_by_kawacy_ddrdpe3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTMzIiwicGF0aCI6IlwvZlwvMWY5MWI3YzAtZmE2Zi00Y2ZkLTlhNWQtNjM5YTdlMjA2OTA2XC9kZHJkcGUzLTMxZGNhZTBkLTE4NmMtNGJkYi1hMWY3LWNiMWE2N2NmN2E4ZC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aH0oirKfVfe7TT2TLBRHoUNcqK8TePfO1aQWc1Yr9IY'
                   )
    aerith = Post(title='Aerith', body_content='Generations meet',
                  user_id=1, media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6c04ef5-b525-492d-9e12-a286980c25fc/ddw7ysi-6e8ae716-a042-41c2-aa6e-d434e998be4b.jpg/v1/fill/w_1192,h_670,q_70,strp/aerith__ff7r_by_gtztaejune_ddw7ysi-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvZDZjMDRlZjUtYjUyNS00OTJkLTllMTItYTI4Njk4MGMyNWZjXC9kZHc3eXNpLTZlOGFlNzE2LWEwNDItNDFjMi1hYTZlLWQ0MzRlOTk4YmU0Yi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rRHyGiraQL7_iIfa53D_btb7CGy0XDgGLSPteGSQ05Q'
                  )
    fushigura = Post(title='Fushigura Card', body_content='Part 1 of a series',
                     user_id=5, media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e544c807-fa21-468c-9e1b-daffe2ef6f11/de9ugv1-5c6600a4-071c-414a-ae7b-95f49529cedf.png'
                     )
    jujutsu = Post(title='Day Off', body_content='The team ;(',
                   user_id=5,media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82337271-26c5-491b-ba60-137232f4af40/deccype-d18fbf7b-8fa2-4e81-88f3-9b41e78aeeb4.png/v1/fill/w_1280,h_640,q_80,strp/day_off_by_teebaismail_deccype-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvODIzMzcyNzEtMjZjNS00OTFiLWJhNjAtMTM3MjMyZjRhZjQwXC9kZWNjeXBlLWQxOGZiZjdiLThmYTItNGU4MS04OGYzLTliNDFlNzhhZWViNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._r423iEj2Nau5vyI0oaIopjhJEgODBeW3A_drjYhsSA'
                   )
    miwa = Post(title='Miwa', body_content='Im not a meme',
                user_id=5,media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f713977-65ec-4b59-82bf-70c457d4047a/deiagpc-47f791e9-8504-4ee0-9bab-6c48f27bb4c6.jpg/v1/fill/w_717,h_1114,q_70,strp/__gfx___miwa_kasumi___jujutsu_kaisen_by_rianda2603_deiagpc-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk4OCIsInBhdGgiOiJcL2ZcLzJmNzEzOTc3LTY1ZWMtNGI1OS04MmJmLTcwYzQ1N2Q0MDQ3YVwvZGVpYWdwYy00N2Y3OTFlOS04NTA0LTRlZTAtOWJhYi02YzQ4ZjI3YmI0YzYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.e3_1qcVDcaPlANZcWokAr_54qGJd6Zu9rONWsyqCTlE'
                )
    kingdom = Post(title='Hi Shin Unit ', body_content='Squad',
                   user_id=1,media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/71a1234e-2aec-4eed-b0db-fb4f3bc08f7a/db6s3mz-db653265-76b0-4443-9985-7ba747da868c.png/v1/fill/w_819,h_710,q_80,strp/hi_shin_unit___kingdom_by_nightangel35_db6s3mz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzEwIiwicGF0aCI6IlwvZlwvNzFhMTIzNGUtMmFlYy00ZWVkLWIwZGItZmI0ZjNiYzA4ZjdhXC9kYjZzM216LWRiNjUzMjY1LTc2YjAtNDQ0My05OTg1LTdiYTc0N2RhODY4Yy5wbmciLCJ3aWR0aCI6Ijw9ODE5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.L5sDF6CfmX-zkW4hALOUpd87ErOgd0p4OTCX7WRzg1c'
                   )
    ishitar = Post(title='Ishitar ', body_content='Rin or Ishitar ?',
                   user_id=4, media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97069fc9-f2cc-4e0a-8302-d288cf4db634/ddkxtav-c185cfc5-e9ef-4bb4-b499-fdc3923548aa.png/v1/fill/w_707,h_1131,q_70,strp/ishtar_by_rimuu_ddkxtav-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzk3MDY5ZmM5LWYyY2MtNGUwYS04MzAyLWQyODhjZjRkYjYzNFwvZGRreHRhdi1jMTg1Y2ZjNS1lOWVmLTRiYjQtYjQ5OS1mZGMzOTIzNTQ4YWEucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.QrmTaniSq12rQ4quWDq4LCkEqcVvV5CamLFyRXXeMsM'
                   )
    nero = Post(title='Nero Claudis', body_content='actually best girl',
                user_id=4, media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f91b7c0-fa6f-4cfd-9a5d-639a7e206906/dbk8ykc-53a37dbf-9099-42f6-9217-bdb799deade9.jpg/v1/fill/w_800,h_497,q_75,strp/under_the_sky_by_kawacy_dbk8ykc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk3IiwicGF0aCI6IlwvZlwvMWY5MWI3YzAtZmE2Zi00Y2ZkLTlhNWQtNjM5YTdlMjA2OTA2XC9kYms4eWtjLTUzYTM3ZGJmLTkwOTktNDJmNi05MjE3LWJkYjc5OWRlYWRlOS5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pi3eu18FT-p5daF7tkLkiuqEx9iotu9bUOr0gDJh9CE'
                )
    lelouch = Post(title='I command you',
                   body_content="You cant change the world without getting your hands dirty.",
                   user_id=1, media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f91b7c0-fa6f-4cfd-9a5d-639a7e206906/db3lzj9-5cdf3f2c-668c-4ab7-8b3a-1684e34d9dad.jpg/v1/fill/w_600,h_847,q_75,strp/i_command_you_by_kawacy_db3lzj9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ3IiwicGF0aCI6IlwvZlwvMWY5MWI3YzAtZmE2Zi00Y2ZkLTlhNWQtNjM5YTdlMjA2OTA2XC9kYjNsemo5LTVjZGYzZjJjLTY2OGMtNGFiNy04YjNhLTE2ODRlMzRkOWRhZC5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.UWZ72869BlEso0F1V8HJtM7z7kQPX4Q9bKpQ5J_g4FM'
                   )
    joker = Post(title='Light & Shadow',
                 body_content="Joker a.k.a Akira Kurusu the protagonist from Persona5",
                 user_id=1, media_url='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f91b7c0-fa6f-4cfd-9a5d-639a7e206906/db2i3g4-25c48b09-d3e0-4989-8818-b48703e650a0.jpg/v1/fill/w_600,h_800,q_75,strp/light_and_shadow_by_kawacy_db2i3g4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvMWY5MWI3YzAtZmE2Zi00Y2ZkLTlhNWQtNjM5YTdlMjA2OTA2XC9kYjJpM2c0LTI1YzQ4YjA5LWQzZTAtNDk4OS04ODE4LWI0ODcwM2U2NTBhMC5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ddNKm31y_6b56P6RCCfl-LXQgKXMo-hT8DYFpeflgTk'
                 )

    db.session.add(toga)
    db.session.add(jiro)
    db.session.add(background)
    db.session.add(kimetsu)
    db.session.add(aerith)
    db.session.add(fushigura)
    db.session.add(miwa)
    db.session.add(kingdom)
    db.session.add(ishitar)
    db.session.add(nero)
    db.session.add(jujutsu)
    db.session.add(lelouch)
    db.session.add(joker)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
